import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Juguete',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Juguete',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio (USD)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tag',
      title: 'Etiqueta (ej: Nuevo, Oferta)',
      type: 'string',
    }),
  ],
})