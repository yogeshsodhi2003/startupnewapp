import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token : process.env.SANITY_API_TOKEN// Set to false if statically generating pages, using ISR or tag-based revalidation
})
console.log('Write client created with token:',
  process.env.SANITY_API_TOKEN )

 