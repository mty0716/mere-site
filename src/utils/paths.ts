// 图片路径工具函数
export const getImagePath = (path: string) => {
  // 在Next.js中，public目录下的文件可以直接通过根路径访问
  return path.startsWith('/') ? path : `/${path}`
}
