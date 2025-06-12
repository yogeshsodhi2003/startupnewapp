import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
  *[
    _type == "startups" && (
    
 $search == "" ||
      title match $search ||
      category match $search ||
      author->user match $search
      

    
)
  ] | order(title asc) {
    _createdAt,
    title,
    _id,
    bio,
    category,
    image,
    founded,
    view,
    slug,
    author -> {
      user,
      email,
      id,
      bio,
      image
    }
  }
`);

export const STARTUPS_QUERY_BY_ID = defineQuery(`
  *[
    _type == "startups" && 
    

    _id == $id
] [0] {
    _createdAt,
    title,
    _id,
    bio,
    category,
    image,
    founded,
    view,
    slug,
    author -> {
      user,
      email,
      id,
      bio,
      image
    }
  }
`);


export const STARTUPS_QUERY_BY_AUTHOR_ID = defineQuery(`
  *[
    _type == "startups" && 
    

    author._ref == $id
]  {
    _createdAt,
    title,
    _id,
    bio,
    category,
    image,
    founded,
    view,
    slug,
    author -> {
      user,
      email,
      id,
      bio,
      image
    }
  }
`);

export const AUTHOR_QUERY_BY_EMAIL = defineQuery(`
  
  *[
    _type == "author" && 
      email == $email
  ] [0] {
    _createdAt,
    user,
    email,
    image,
    bio,
    id
  }
  
  
  `);

  export const AUTHOR_QUERY_BY_ID = defineQuery(`
  *[_type == "author" && id == $id][0] {
    _createdAt,
    user,
    email,
    id,
    image,
    bio
  }
`
  );
