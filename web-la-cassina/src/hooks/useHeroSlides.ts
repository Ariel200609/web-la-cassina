import { useEffect, useState } from 'react'
import { sanityClient, urlFor, fileUrl } from '../utils/sanityClient'

export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  mediaType: 'image' | 'video'
  image?: string
  video?: string
  link?: string
  buttonText?: string
  order: number
}

const HERO_QUERY = `*[_type == "heroSlide"] | order(order asc) {
  "id": _id,
  title,
  subtitle,
  mediaType,
  image,
  video,
  link,
  buttonText,
  order
}`

export function useHeroSlides() {
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    sanityClient
      .fetch(HERO_QUERY)
      .then((data: any[]) => {
        const parsed: HeroSlide[] = data.map((item) => ({
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          mediaType: item.mediaType || 'image',
          image: item.image ? urlFor(item.image).width(1920).quality(85).url() : undefined,
          video: item.video?.asset?._ref ? fileUrl(item.video.asset._ref) : undefined,
          link: item.link,
          buttonText: item.buttonText,
          order: item.order,
        }))
        setSlides(parsed)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching hero slides:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { slides, loading, error }
}
