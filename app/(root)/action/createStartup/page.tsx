'use server'

import { auth } from '@/auth'
import { client } from '@/sanity/lib/client'




export async function createStartup(data: {
  title: string
  category: string
  imageUrl: string
  bio: string
  
}) 

{


const session =await auth()
const author = session.id


  try {
      const authorExists = await client.fetch(
      `*[_type == "author" && id == $authorId][0]`,
      { authorId: author }
    )



    const newDoc = await client.create({
      _type: "startups",
      title: data.title,
      category: data.category,
      image: data.imageUrl,
      bio: data.bio,
      founded: new Date().toISOString(),
      slug: {
        _type: "slug",
        current: data.title.toLowerCase().replace(/\s+/g, "-"),
      },
      author: {                                                                                                                             
        _type: "reference",
        _ref: authorExists._id,
      },
    })

    return { success: true, doc: newDoc }
  } catch (err) {
    console.error("createStartup error", err)
    return { success: false, message: "Something went wrong" }
  }
}
