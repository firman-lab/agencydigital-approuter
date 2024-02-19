/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    distDir: 'dist',
    trailingSlash: true,
}

module.exports = nextConfig
