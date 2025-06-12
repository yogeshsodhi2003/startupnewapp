import { auth } from "@/auth"

import { client } from "@/sanity/lib/client"
import { AUTHOR_QUERY_BY_ID, STARTUPS_QUERY_BY_AUTHOR_ID} from "@/sanity/lib/query"
import Image from "next/image"




const page = async() => {


   const session =await auth()
   const userId = session.id

   const user = await client.fetch(AUTHOR_QUERY_BY_ID, {id : userId})
   console.log(user._id)
   
   const posts = await client.fetch(STARTUPS_QUERY_BY_AUTHOR_ID, {id : user.id})
   console.log("post" , posts)
  

  return (
   <>
  

    <main className="min-h-screen  font-sans">

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

  
      <section className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post : any) => (
          <div
            key={post._id}
            className="bg-white text-black rounded-xl overflow-hidden border-4 border-[#ff2969] hover:scale-[1.02] transition-all duration-300 shadow-md"
          >
            <div className="h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt="post image"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-[#ff2969]">{post.title}</h2>
              <p className="text-sm text-black/70">{post.bio}</p>
              <div className="flex justify-between items-center text-xs mt-2 text-black/50">
                <span>{post.category}</span>
                <span>{new Date(post._createdAt).toDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  



   </>
  )
}

export default page
