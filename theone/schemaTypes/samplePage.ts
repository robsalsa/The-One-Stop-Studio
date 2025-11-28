import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'samplePage',
  title: 'Sample Page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
      description: 'Language field for document internationalization',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Test field for the sample page',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A simple text description',
    }),
    defineField({
      name: 'testNumber',
      title: 'Test Number',
      type: 'number',
      description: 'Testing number field',
    }),
    defineField({
      name: 'testBoolean',
      title: 'Test Boolean',
      type: 'boolean',
      description: 'Testing boolean field',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
