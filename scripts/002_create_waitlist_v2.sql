-- Drop previous constraints (important)
ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_email_key;

DROP INDEX IF EXISTS waitlist_email_idx;

-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow ANYONE (anon key included) to insert
DROP POLICY IF EXISTS "Allow insert" ON public.waitlist;
CREATE POLICY "Allow insert"
  ON public.waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Optional: allow select (not required for your form)
DROP POLICY IF EXISTS "Allow select" ON public.waitlist;
CREATE POLICY "Allow select"
  ON public.waitlist
  FOR SELECT
  TO public
  USING (true);

-- Proper unique index (case-insensitive email)
CREATE UNIQUE INDEX waitlist_email_lower_idx ON public.waitlist (LOWER(email));
