import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Cliente de Sanity para el frontend
export const sanityClient = createClient({
  projectId: 'qdxz630a',
  dataset: 'production',
  useCdn: true, // `false` si querés datos siempre frescos (para desarrollo)
  apiVersion: '2024-01-01',
})

// Helper para construir URLs de imágenes desde Sanity
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper para obtener URL de archivos (videos, PDFs, etc.)
export function fileUrl(ref: string) {
  // ref format: file-<id>-<extension>
  const [, id, extension] = ref.split('-')
  return `https://cdn.sanity.io/files/qdxz630a/production/${id}.${extension}`
}
