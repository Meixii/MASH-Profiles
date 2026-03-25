import type { CollectionConfig } from 'payload'

import { themePresetOptions } from '@/lib/themePresets'
import { techStackOptions } from '@/lib/techStack'

export const Profiles: CollectionConfig = {
  slug: 'profiles',
  admin: {
    defaultColumns: ['displayName', 'role', 'slug', 'order', 'isActive'],
    useAsTitle: 'displayName',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'displayName',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'headline',
      type: 'text',
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'resumeLabel',
      type: 'text',
      required: true,
      defaultValue: 'Resume',
    },
    {
      name: 'resumeHref',
      type: 'text',
      required: true,
      admin: {
        description: 'Use a unique resume link for this profile.',
      },
    },
    {
      name: 'avatar',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'heroImage',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'accentColor',
      type: 'text',
      required: true,
      defaultValue: '#05cd77',
    },
    {
      name: 'backgroundColor',
      type: 'text',
      required: true,
      defaultValue: '#0f172a',
    },
    {
      name: 'textColor',
      type: 'text',
      required: true,
      defaultValue: '#f8fafc',
    },
    {
      name: 'themePreset',
      type: 'select',
      required: true,
      defaultValue: 'elegantLuxury',
      options: themePresetOptions,
    },
    {
      name: 'content',
      type: 'group',
      fields: [
        {
          name: 'hero',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: 'Hero',
            },
            {
              name: 'headline',
              type: 'text',
            },
            {
              name: 'body',
              type: 'textarea',
            },
            {
              name: 'image',
              type: 'relationship',
              relationTo: 'media',
            },
            {
              name: 'ctaLabel',
              type: 'text',
              defaultValue: 'Contact me',
            },
            {
              name: 'ctaHref',
              type: 'text',
              defaultValue: '#contact',
            },
          ],
        },
        {
          name: 'about',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: 'About',
            },
            {
              name: 'body',
              type: 'textarea',
            },
            {
              name: 'educationLabel',
              type: 'text',
              defaultValue: 'Education',
            },
            {
              name: 'educationBody',
              type: 'textarea',
            },
            {
              name: 'showTechStack',
              type: 'checkbox',
              defaultValue: true,
            },
            {
              name: 'techStackItems',
              type: 'select',
              hasMany: true,
              options: techStackOptions,
              admin: {
                condition: (_, siblingData) => siblingData?.showTechStack,
              },
            },
            {
              name: 'stats',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'projects',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: 'Projects',
            },
            {
              name: 'body',
              type: 'textarea',
            },
            {
              name: 'items',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'techStack',
                  type: 'text',
                },
                {
                  name: 'image',
                  type: 'relationship',
                  relationTo: 'media',
                },
                {
                  name: 'liveUrl',
                  type: 'text',
                },
                {
                  name: 'githubUrl',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          name: 'blog',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: 'Blog',
            },
            {
              name: 'body',
              type: 'textarea',
            },
            {
              name: 'posts',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'relationship',
                  relationTo: 'media',
                },
                {
                  name: 'publishAt',
                  type: 'text',
                },
                {
                  name: 'link',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          name: 'contact',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              defaultValue: 'Contact',
            },
            {
              name: 'body',
              type: 'textarea',
            },
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'fontFamily',
      type: 'text',
      required: true,
      defaultValue: 'Jost',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      defaultValue: 'View profile',
    },
    {
      name: 'ctaHref',
      type: 'text',
      defaultValue: '/',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  timestamps: true,
}
