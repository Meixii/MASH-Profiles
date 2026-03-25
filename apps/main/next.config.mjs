/** @type {import('next').NextConfig} */
const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL || process.env.CMS_BASE_URL || 'http://localhost:3001'

let cmsRemotePattern = null

try {
    const url = new URL(cmsBaseUrl)
    cmsRemotePattern = {
        protocol: url.protocol.replace(':', ''),
        hostname: url.hostname,
        port: url.port,
        pathname: '/api/media/file/**',
    }
} catch {
    cmsRemotePattern = null
}

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        domains: ['avatars.githubusercontent.com', 'static.wixstatic.com', 'assets-global.website-files.com'],
        remotePatterns: [cmsRemotePattern].filter(Boolean),
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: cmsBaseUrl,
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-Requested-With, Content-Type, Authorization',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://quadkore.app',
                permanent: true,
            },
        ];
    },
}

export default nextConfig
