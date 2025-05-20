/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/boamos.github.io', // Replace with your repository name
    trailingSlash: true, // Ensures all paths end with a slash
    siteUrl: 'https://boamos.github.io',
    generateRobotsTxt: true,
 
};

export default nextConfig;
