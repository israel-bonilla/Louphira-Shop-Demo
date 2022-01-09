module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.israelb.xyz"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  }
}
