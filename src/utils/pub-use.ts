/**
 * 获取assets静态资源
 * 使用方式：getAssetsFile(url)
 * @param url images内文件的相对路径
 */

export function getAssetsFile(url: string) {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}
