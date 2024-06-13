
import { supabase } from "Supabase";

export const getRequest = async () => {
  const { data, error } = await supabase.from('registration_data').select('*').eq("membership_status","pending").order('created_at', { ascending: false });;
  if (error) {
    console.log('failed to get request data from supabase', error);
    throw error;
  }
  // console.log("data fetched",data);
  return data
};

// getRequest()
