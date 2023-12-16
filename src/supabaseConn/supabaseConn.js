import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nchqsbeokgcngyizhfhe.supabase.co'
const supabase = createClient(
  supabaseUrl,
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jaHFzYmVva2djbmd5aXpoZmhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjQxMjU1NiwiZXhwIjoyMDE3OTg4NTU2fQ.TBlJHqnyY23nf0G1Q4zukjMj7fpKEN0YuY-yB4_VuIg',
  //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jaHFzYmVva2djbmd5aXpoZmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0MTI1NTYsImV4cCI6MjAxNzk4ODU1Nn0.klSKxsTNefjDXG_ybCv4f7l-OFT2yDMQUqTPs0PUaA4',
)

export default supabase
