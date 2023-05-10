/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
    
    distDir:"build",
    output:"export",
    trailingSlash: true,
    images:{
        unoptimized:true
    }
};


module.exports = nextConfig;
module.exports = withVideos();