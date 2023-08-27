import { createClient} from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.PROJECT_ID!,
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: true
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: string){
  return builder.image(source)
}
