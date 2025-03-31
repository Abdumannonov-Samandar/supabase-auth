import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { DEMO_DATA } from '../utils/constants'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isDemo = !supabaseUrl || !supabaseAnonKey

export const supabase: SupabaseClient = isDemo
	? (DEMO_DATA as unknown as SupabaseClient) // Demo ma'lumotlari uchun mock client
	: createClient(supabaseUrl!, supabaseAnonKey!, {
			auth: {
				persistSession: false,
			},
	  })
