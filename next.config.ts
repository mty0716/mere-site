import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 移除export模式，使用标准模式支持动态路由
  
  // 图片优化配置
  images: {
    unoptimized: true,
  },
  
  // 构建配置
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
  

};

export default nextConfig;
