import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Profiles } from './collections/Profiles'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const runtimeImport = new Function('specifier', 'return import(specifier)') as (
  specifier: string,
) => Promise<any>

async function getCloudinaryStoragePlugin() {
  try {
    const module = await runtimeImport('payloadcms-storage-cloudinary')

    return module?.cloudinaryStorage ?? null
  } catch {
    return null
  }
}

const cloudinaryStorage = await getCloudinaryStoragePlugin()

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data }) =>
        `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/${data.slug}`,
      collections: ['profiles'],
    },
  },
  collections: [Users, Media, Profiles],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  plugins:
    cloudinaryStorage && process.env.CLOUDINARY_CLOUD_NAME
      ? [
          cloudinaryStorage({
            collections: {
              media: true,
            },
            cloudinaryConfig: {
              api_key: process.env.CLOUDINARY_API_KEY,
              api_secret: process.env.CLOUDINARY_API_SECRET,
              cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            },
            folder: process.env.CLOUDINARY_FOLDER,
          }),
        ]
      : [],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
})
