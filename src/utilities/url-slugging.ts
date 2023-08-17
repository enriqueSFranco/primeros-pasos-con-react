export function slugify (url: URL) {
  const { pathname } = url

  return pathname
    .toLocaleLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

}