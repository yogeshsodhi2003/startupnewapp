
import Box from '@/components/Box';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY_BY_ID } from '@/sanity/lib/query';
import { notFound } from 'next/navigation';


type Params = {
  params: {
    id: string;
  };
};

const page = async({params}: Params) => {
   const id = (await params).id;
  

   const post = await client.fetch(STARTUPS_QUERY_BY_ID, {id})
    if (!post) {
      return notFound();
    }
    const title = post.title
  return (
    <>
    <div className='heading'>
      <Box heading={title}/>
    </div>
    <section className='flex justify-center items-center'>
      <Image src={post.image}  height={700} width={500} alt='post image'/>
    </section>
   </>
  )
}

export default page
