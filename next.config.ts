import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
};

export default withContentlayer(config);
