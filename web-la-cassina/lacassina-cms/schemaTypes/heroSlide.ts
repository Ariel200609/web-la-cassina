import {defineField, defineType} from 'sanity'

export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Hero - Slides del Carrusel',
  type: 'document',
  icon: () => '🖼️',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ej: "PRÓXIMO REMATE", "CALIDAD GENÉTICA"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo / Descripción',
      type: 'text',
      rows: 3,
      description: 'Texto que aparece debajo del título en el hero.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaType',
      title: 'Tipo de Media',
      type: 'string',
      options: {
        list: [
          {title: 'Imagen', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen de Fondo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Imagen principal del slide (se usa si el tipo de media es "Imagen").',
      hidden: ({document}) => document?.mediaType === 'video',
    }),
    defineField({
      name: 'video',
      title: 'Video de Fondo',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Video del slide (se usa si el tipo de media es "Video"). Formato MP4 recomendado.',
      hidden: ({document}) => document?.mediaType === 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link Interno',
      type: 'string',
      description: 'Ruta interna, ej: "/remates", "/genetica", "/establecimiento"',
    }),
    defineField({
      name: 'buttonText',
      title: 'Texto del Botón',
      type: 'string',
      description: 'Ej: "Ver Remate", "Programa Genético"',
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Número para ordenar los slides (1, 2, 3...).',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      order: 'order',
    },
    prepare({title, subtitle, media, order}) {
      return {
        title: `${order ?? '?'}. ${title}`,
        subtitle: subtitle,
        media: media,
      }
    },
  },
})
