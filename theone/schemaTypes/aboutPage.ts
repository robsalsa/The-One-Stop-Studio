import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'Main title for the about page (e.g., "About Us")',
    }),
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'The heading above rotating text (e.g., "Meet Your")',
    }),
    defineField({
      name: 'rotatingWords',
      title: 'Rotating Words',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of words that rotate in the animation (e.g., Barber, Stylist, etc.)',
    }),
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      description: 'Name of the studio owner',
    }),
    defineField({
      name: 'ownerTitle',
      title: 'Owner Title',
      type: 'string',
      description: 'Title of the owner (e.g., "Owner of The One Stop Studio")',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main image for the about page',
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Full biography text with multiple paragraphs',
    }),
    defineField({
      name: 'establishedYear',
      title: 'Established Year',
      type: 'number',
      description: 'Year the business was established',
    }),
    defineField({
      name: 'yearsExperience',
      title: 'Years of Experience',
      type: 'number',
      description: 'Number of years of experience',
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of certifications (e.g., licensed barber, licensed cosmetologist, etc.)',
    }),
    defineField({
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of services offered at the studio',
    }),
  ],

  preview: {
    select: {
      title: 'pageTitle',
      subtitle: 'language',
      media: 'aboutImage',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title || 'About Page',
        subtitle: subtitle ? `Language: ${subtitle}` : 'No language set',
        media: selection.media,
      }
    },
  },
})
