/** @type {import('next').NextConfig} */
const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL || process.env.CMS_BASE_URL || 'http://localhost:3001'

let cmsRemotePattern = null

let cmsDirectMediaPattern = null

try {
    const url = new URL(cmsBaseUrl)
    cmsRemotePattern = {
        protocol: url.protocol.replace(':', ''),
        hostname: url.hostname,
        port: url.port,
        pathname: '/api/media/file/**',
    }
    cmsDirectMediaPattern = {
        protocol: url.protocol.replace(':', ''),
        hostname: url.hostname,
        port: url.port,
        pathname: '/media/**',
    }
} catch {
    cmsRemotePattern = null
    cmsDirectMediaPattern = null
}

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        domains: ['avatars.githubusercontent.com', 'static.wixstatic.com', 'assets-global.website-files.com'],
        remotePatterns: [cmsRemotePattern, cmsDirectMediaPattern].filter(Boolean),
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
                destination: 'https://profile.quadkore.app',
                permanent: true,
            },
        ];
    },
}

export default nextConfig
