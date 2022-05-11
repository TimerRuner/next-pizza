/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com"],
    },
    assetPrefix: "https://pizza-next.herokuapp.com",
}

module.exports = nextConfig
