"use client"

import React, { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  opacity: number
}

interface Props {
  density?: number
  palette?: string[]
  cursorInteraction?: boolean
  mode?: 'default' | 'calm' | 'energetic'
}

export function ParticleCanvas({
  density = 100,
  palette = ['#7C7AF2', '#FF7A6B', '#F6D365'],
  cursorInteraction = true,
  mode = 'default',
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const pointerRef = useRef({ x: -9999, y: -9999, down: false })
  const throttleRef = useRef(0)

  const createParticles = useCallback((width: number, height: number, count: number) => {
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (mode === 'energetic' ? 1.5 : mode === 'calm' ? 0.3 : 0.6),
        vy: (Math.random() - 0.5) * (mode === 'energetic' ? 1.5 : mode === 'calm' ? 0.3 : 0.6),
        radius: Math.random() * 3 + 2,
        color: palette[Math.floor(Math.random() * palette.length)],
        opacity: Math.random() * 0.5 + 0.4,
      })
    }
    return particles
  }, [mode, palette])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const width = rect.width
    const height = rect.height

    // Determine particle count based on viewport
    let particleCount = density
    if (width < 768) particleCount = Math.max(15, density * 0.3)
    else if (width < 1280) particleCount = Math.max(40, density * 0.6)

    particlesRef.current = createParticles(width, height, particleCount)

    const prefers = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefers) return

    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)'
      ctx.fillRect(0, 0, width, height)

      const particles = particlesRef.current
      const pointer = pointerRef.current

      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx
        p.y += p.vy

        // Boundary wrapping
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        // Cursor interaction
        if (cursorInteraction && pointer.x > -9999) {
          const dx = pointer.x - p.x
          const dy = pointer.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const attractDistance = 120

          if (distance < attractDistance) {
            const force = (1 - distance / attractDistance) * 0.5
            p.vx += (dx / distance) * force * 0.3
            p.vy += (dy / distance) * force * 0.3
          }
        }

        // Speed damping
        p.vx *= 0.98
        p.vy *= 0.98

        // Draw particle
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.shadowColor = p.color
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    const handlePointerMove = (e: PointerEvent) => {
      const now = Date.now()
      if (now - throttleRef.current < 16) return
      throttleRef.current = now

      const rect = canvas.getBoundingClientRect()
      pointerRef.current.x = e.clientX - rect.left
      pointerRef.current.y = e.clientY - rect.top
    }

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      particlesRef.current = createParticles(rect.width, rect.height, particleCount)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [density, palette, cursorInteraction, mode, createParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      data-testid="particle-canvas"
    />
  )
}
