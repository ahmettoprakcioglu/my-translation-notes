
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sqpkqqzdjxaoyxlfelmb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxcGtxcXpkanhhb3l4bGZlbG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NTUxNjUsImV4cCI6MjAzNzEzMTE2NX0.d--QV_J_XQ2TSGUxESXRRtLv-EGlDWUML0_Ek58TCp0';
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;