import { defineField, defineType } from "sanity";

export const startups = defineType({
  name: "startups",
  type: "document",
  title: "Startups",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "bio",
      type: "string",
    }),
    defineField({
        name:'author',
        type:'reference',
        to:{type:'author'}
    }),
    defineField({
        name:"view",
        type:"number",
        initialValue: 0,
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
        name: "category",
        type:'string'
    }),

    defineField({
      name: "founded",
      type: "date",
    }),
  ],

  
});
