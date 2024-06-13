import { supabase } from "Supabase";



export const getMembers=async()=>{
    const {data,error}=await supabase.from("registration_data").select("*").eq("membership_status","verified")
    if (error) {
        console.log("failed to get member from supabase");
        throw error
    }
    console.log("member from api",data);
    return data
}
getMembers()