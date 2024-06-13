import { supabase } from 'Supabase';

export const getRequestCount = async () => {
  const { data, count } = await supabase.from('registration_data').select('*', { count: 'exact', head: true });
  //   console.log('request count fetched', count);
  return count;
};

export const getMembersCount = async () => {
    const { data, count } = await supabase.from('registration_data').select('*', { count: 'exact', head: true }).eq("membership_status","verified");
    //   console.log('request count fetched', count);
    return count;
};
