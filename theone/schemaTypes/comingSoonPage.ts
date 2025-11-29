import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'comingSoonPage',
    title: 'Coming Soon Page',
    type: 'document',
    fields:[
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    {title: 'English', value: 'en'},
                    {title: 'Spanish', value: 'es'},
                    {title: 'Korean', value: 'ko'}
                ]
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type:'text',
            description: 'This section is for Features or Announcements so, writing something like "Update: Booking Feature coming soon" or "Update: Holidays the studio will be closed"',
        }),
    ],

    preview: {
        select: {
            language: 'language',
            subtitle: 'description',
        },
        prepare({language, subtitle}) {
            return {
                title: `Coming Soon Page (${language?.toUpperCase() || 'No language'})`,
                subtitle: subtitle
            }
        }
    },
})