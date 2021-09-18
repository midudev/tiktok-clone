import { supabase } from './supabase.js'

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(`*, user:user_id (
      avatar,
      username,
      id
    )`)

  return [error, data]
}
