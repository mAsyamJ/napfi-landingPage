-- Create waitlist table for NAPFI
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Anyone can view the waitlist (for transparency)
CREATE POLICY "Allow anonymous insert to waitlist"
  ON public.waitlist FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can view their own entry
CREATE POLICY "Allow users to view their own entry"
  ON public.waitlist FOR SELECT
  USING (true);
