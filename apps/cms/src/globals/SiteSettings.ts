import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    group: 'Site Content',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'MASH Profiles',
    },
    {
      name: 'selectorTitle',
      type: 'text',
      required: true,
      defaultValue: 'Choose a person',
    },
    {
      name: 'selectorDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'Pick a person to view their custom page, layout details, and theme tokens.',
    },
    {
      name: 'defaultAccentColor',
      type: 'text',
      required: true,
      defaultValue: '#05cd77',
    },
    {
      name: 'defaultBackgroundColor',
      type: 'text',
      required: true,
      defaultValue: '#0f172a',
    },
    {
      name: 'defaultTextColor',
      type: 'text',
      required: true,
      defaultValue: '#f8fafc',
    },
  ],
}
