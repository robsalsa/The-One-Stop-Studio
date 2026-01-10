import {defineField, defineType} from 'sanity'

export default defineType({
    name:'modalPopUp',
    title:'Modal Pop Up',
    type: 'document',
    fields:[
        defineField({
            name:'language',
            title:'Language',
            type:'string',
            options: {
                list: [
                    {title:'English', value: 'en'},
                    {title:'Spanish', value: 'es'},
                    {title:'Korean', value: 'ko'}
                ]
            },
        }),
        defineField({
            name:'title',
            title:'Title',
            type:'string',
            description: 'Please enter a Title for Pop-Up. Example: "Discount", "Notification", .etc',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type:'text',
            description: 'Please enter a short statement of what the Pop-Up is about. Example: "Promotional currently haircuts are 5% off"',
        }),
        defineField({
            title: 'Link',
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })

        }),
    ],
})