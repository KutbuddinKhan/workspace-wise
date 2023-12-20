/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },

    images: {
        domains: ['pipgukkmmceslrjtuaxd.supabase.co'],
    }
}

module.exports = nextConfig
