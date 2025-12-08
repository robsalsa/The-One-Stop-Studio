import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentI18n} from '@sanity/document-internationalization'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'theone',

  projectId: 'gs1shopm',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentI18n({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Spanish'},
        {id: 'ko', title:'Korean'},
      ],
      schemaTypes: ['samplePage', 'servicePage', 'aboutPage', 'comingSoonPage'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
