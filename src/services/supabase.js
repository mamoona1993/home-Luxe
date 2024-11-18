import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pfyvneucjcvvzlwbpxbl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeXZuZXVjamN2dnpsd2JweGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDg1NDgsImV4cCI6MjA0MzM4NDU0OH0.dedE18zoH6ZzYI3laTGE8KBIlhaBGzrFGQ5_6QKhV14";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
