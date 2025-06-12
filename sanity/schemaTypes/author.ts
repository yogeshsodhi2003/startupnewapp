// /sanity/schema/user.ts

import { defineField, defineType } from "sanity"
export const author  = defineType({
  name: 'author',
  type: 'document',
  title: 'author',
  fields: [
       defineField({
        name:"id",
        type:"string"
       }),
        defineField({
        name:"user",
        type:"string"
       }),
        defineField({
        name:"email",
        type:"string"
       }),
        defineField({
        name:"image",
        type:"url"
       }),
        defineField({
        name:"bio",
        type:"string"
       }),
    
  ],
  preview:{
    select:{
        title:'user'
    }
  }
})
