import { auth } from "@/auth"

import { client } from "@/sanity/lib/client"
import { AUTHOR_QUERY_BY_ID, STARTUPS_QUERY_BY_AUTHOR_ID} from "@/sanity/lib/query"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Cardprops = {
  _id: string;
  _createdAt: string;
  views: number;
  title: string;
  bio: string;
  image: string;
  category: string; 
};



const page = async() => {


   const session =await auth()
   const userId = session.id

   const user = await client.fetch(AUTHOR_QUERY_BY_ID, {id : userId})
   const useremail = user.email
   
   
   

  const posts = await client.fetch(STARTUPS_QUERY_BY_AUTHOR_ID, { email : useremail })
  console.log('post', posts)
  

  return (
   <>
  

    <main className="min-h-screen  ">

      <section className="bg-[#ff2969] p-8 md:p-12 rounded-b-3xl shadow-lg flex flex-col items-center gap-4 text-center relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <Image src={'/boy.png'} alt="user" width={128} height={128} className="object-cover" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">{user.user}</h1>
        <p className="text-sm max-w-md text-white/80">{user.bio}</p>
        <span className="text-xs bg-white text-[#ff2969] px-3 py-1 rounded-full font-mono mt-2">
          {user.email}
        </span>
      </section>
     
     <div ><h1 className="head-text">YOUR STARTUPS</h1></div>
  
      <section className="card-section w-full flex items-center  justify-center md:justify-start gap-10 p-15  flex-wrap">
        
               {posts.map((posts : Cardprops) => (
                <div key={posts._id} className="card w-85 h-110 flex flex-col gap-4  overflow-hidden">
                  <div className="upper">
                  <span className="flex justify-between"><h1 className="text-xl">{posts._createdAt}</h1> <h1>{posts.views}</h1></span>
                    <h1 className="text-2xl">{posts.title}</h1>
                    <p>{posts.bio}</p>
                    </div>
                    <div className="center bg-black h-100 w-2/2 object-cover">
                    <Image src={posts.image} width={300} height={100} alt="card image " className="border object-cover"/>
                    </div>
                    <div className="bottom">
                    <span className="flex justify-between ">
                      <h1>{posts.category}</h1>
                   <Link href={`/${posts._id}`}>  <Button>View Details</Button></Link> 
                    </span>
                    </div>
                    
                </div>
              )
        )} 
      </section>
    </main>
  



   </>
  )
}

export default page
