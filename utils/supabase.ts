import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://sazcejkucjhgcyrklrge.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhemNlamt1Y2poZ2N5cmtscmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0Mzk0OTcsImV4cCI6MjA4NjAxNTQ5N30.VxhZ7_2fa8sScsSsh4QQ8yQkYGoNbd3tGHUyVnXmvo0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
