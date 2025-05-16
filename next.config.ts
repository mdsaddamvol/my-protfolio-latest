import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["via.placeholder.com"], // Add this line to allow external images from this domain
	},
};

export default nextConfig;
