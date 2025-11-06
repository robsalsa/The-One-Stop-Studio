import {defineField, defineType, defineArrayMember} from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const postType = defineType({
    name:'post',
    title:'Post',
    type:'document',
    fields:[
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name:'title',
            description: 'Give the page a title',
            type:'string',
            validation:(rule)=> rule.required(),
        }),
        defineField({
            name:'members',
            title:'Team Members',
            type:'array',
            of:[{
                type:'object',
                fields:[
                    {name: 'title', type: 'string', title: 'Name'},
                    {name: 'role', type: 'string', title: 'Role'},
                    {name: 'body', type: 'array', of: [{type: 'block'}], title: 'Bio'},
                    {name: 'image', type: 'image', title: 'Photo'}
                ],
                preview: {
                    select: { title: 'title', subtitle: 'role', media: 'image' }
                }
            }],
        }),
        defineField({
            name:'image',
            type:'image',
            description:'Please keep images smaller than 800 x 800',
        
        }),
        defineField({
            name:'body',
            type:'array',
            description:'Must be at least over 100 words.',
            of:[{type:'block'}],
        })
    ]
})