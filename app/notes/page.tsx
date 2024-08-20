import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = createClient();

    let data = await supabase
    .from('youtube_videos')
    .select('*')
    console.log(data)
    // return the data in a code block
    return <pre className='mt-28'>{JSON.stringify(data, null, 2)}</pre>
}