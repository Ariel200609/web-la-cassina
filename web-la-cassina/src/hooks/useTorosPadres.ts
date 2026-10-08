import { useEffect, useState } from 'react'
import { sanityClient, urlFor } from '../utils/sanityClient'

export interface ToroPadreStat {
  label: string
  valor: string
  iconType: 'scale' | 'ruler' | 'activity'
}

export interface ToroPadre {
  id: string
  nombre: string
  raza: string
  registro: string
  imagen: string
  descripcion: string
  fortaleza: string
  stats: ToroPadreStat[]
  order: number
}

const TOROS_QUERY = `*[_type == "toroPadre"] | order(order asc) {
  "id": _id,
  nombre,
  raza,
  registro,
  imagen,
  descripcion,
  fortaleza,
  stats[] {
    label,
    valor,
    iconType
  },
  order
}`

export function useTorosPadres() {
  const [toros, setToros] = useState<ToroPadre[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    sanityClient
      .fetch(TOROS_QUERY)
      .then((data: any[]) => {
        const parsed: ToroPadre[] = data.map((item) => ({
          id: item.id,
          nombre: item.nombre,
          raza: item.raza,
          registro: item.registro || '',
          imagen: item.imagen ? urlFor(item.imagen).width(800).quality(80).url() : '',
          descripcion: item.descripcion,
          fortaleza: item.fortaleza || '',
          stats: (item.stats || []).map((s: any) => ({
            label: s.label,
            valor: s.valor,
            iconType: s.iconType || 'scale',
          })),
          order: item.order || 0,
        }))
        setToros(parsed)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching toros padres:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { toros, loading, error }
}
