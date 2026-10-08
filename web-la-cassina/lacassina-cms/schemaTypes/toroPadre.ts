import {defineField, defineType} from 'sanity'

export const toroPadre = defineType({
  name: 'toroPadre',
  title: 'Toros Padres',
  type: 'document',
  icon: () => '🐂',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre del Toro',
      type: 'string',
      description: 'Ej: "Apache", "Alfonso", "Bandolero"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'raza',
      title: 'Raza',
      type: 'string',
      description: 'Ej: "Angus", "Angus Colorado", "Polled Hereford", "Brangus Colorado"',
      options: {
        list: [
          {title: 'Angus', value: 'Angus'},
          {title: 'Angus Colorado', value: 'Angus Colorado'},
          {title: 'Polled Hereford', value: 'Polled Hereford'},
          {title: 'Brangus Colorado', value: 'Brangus Colorado'},
          {title: 'Braford', value: 'Braford'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'registro',
      title: 'Registro',
      type: 'string',
      description: 'Ej: "RP: 363 | HBA: 787859"',
    }),
    defineField({
      name: 'imagen',
      title: 'Foto del Toro',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      description: 'Descripción destacada del toro.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fortaleza',
      title: 'Fortaleza Genética',
      type: 'text',
      rows: 2,
      description: 'Texto que se muestra en la sección "Fortaleza Genética".',
    }),
    defineField({
      name: 'stats',
      title: 'Estadísticas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Etiqueta',
              type: 'string',
              description: 'Ej: "PESO", "CE", "ALTURA", "FRAME"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'valor',
              title: 'Valor',
              type: 'string',
              description: 'Ej: "980 kg", "41 cm", "1.38 m"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'iconType',
              title: 'Tipo de Ícono',
              type: 'string',
              options: {
                list: [
                  {title: '⚖️ Peso (Scale)', value: 'scale'},
                  {title: '📏 Altura (Ruler)', value: 'ruler'},
                  {title: '📊 CE / Actividad (Activity)', value: 'activity'},
                ],
              },
              initialValue: 'scale',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'valor',
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'order',
      title: 'Orden de Aparición',
      type: 'number',
      description: 'Número para ordenar los toros (1, 2, 3...).',
      validation: (Rule) => Rule.integer().positive(),
    }),
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Nombre A-Z',
      name: 'nombreAsc',
      by: [{field: 'nombre', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'raza',
      media: 'imagen',
    },
  },
})
