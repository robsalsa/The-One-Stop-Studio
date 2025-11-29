import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    // SEO & Head
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title for the page head',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon URL',
      type: 'url',
      description: 'Link to favicon image',
    }),

    // Slideshow
    defineField({
      name: 'slides',
      title: 'Slideshow Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    // Buttons
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'object',
      fields: [
        defineField({ name: 'services', title: 'Services Button Text', type: 'string' }),
        defineField({ name: 'spanish', title: 'Spanish Button Text', type: 'string' }),
        defineField({ name: 'book', title: 'Book Appointment Button Text', type: 'string' }),
      ],
    }),

    // Scrolling Ads
    defineField({
      name: 'scrollingAds',
      title: 'Scrolling Ads Text',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Text that scrolls in the ad section',
    }),

    // Buzzwords
    defineField({
      name: 'buzzwords',
      title: 'Buzzwords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Rotating buzzwords in the footer or hero section',
    }),

    // Reviews
    defineField({
      name: 'reviews',
      title: 'Customer Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Review Title', type: 'string' }),
            defineField({ name: 'description', title: 'Review Description', type: 'text' }),
            defineField({ name: 'author', title: 'Review Author', type: 'string' }),
          ],
        },
      ],
    }),

    // Footer text (for consistency)
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({ name: 'companyName', title: 'Company Name', type: 'string' }),
        defineField({ name: 'copyright', title: 'Copyright Text', type: 'string' }),
      ],
    }),

    // // Optional: multi-language
    // defineField({
    //   name: 'translations',
    //   title: 'Translations',
    //   type: 'object',
    //   fields: [
    //     defineField({ name: 'en', title: 'English' }),
    //     defineField({ name: 'es', type: 'object', title: 'Spanish' }),
    //     defineField({ name: 'ko', type: 'object', title: 'Korean' }),
    //   ],
    // }),
  ],

  preview: {
    select: {
      title: 'seoTitle',
      subtitle: 'buttons.services',
    },
  },
})
