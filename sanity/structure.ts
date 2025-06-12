import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>



     S.list()
    .title('Content')
    .items([
      // 👇 Add custom author entry
      S.documentTypeListItem('author').title('Authors'),
       S.documentTypeListItem('startups').title('Startups'),

    ])