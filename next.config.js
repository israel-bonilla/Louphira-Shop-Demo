module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.israelb.xyz"],
    formats: ['image/webp'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  }
}
