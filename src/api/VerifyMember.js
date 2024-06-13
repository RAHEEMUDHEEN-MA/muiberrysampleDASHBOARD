import { supabase } from "Supabase";


 export const VerifyMember = async (id) => {
  const { data, error } = await supabase.from('registration_data').update({ membership_status: "verified" }).eq("id",id).select();
  if (error) {
    console.log("error in updating status",error)
    throw error
  }
  console.log(data);
  return true

};
