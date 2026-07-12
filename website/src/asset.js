// MAISON LUMIÈRE — resolve public assets against the deploy base path
// (works at "/" in dev and under "/<repo>/" on GitHub Pages). Absolute URLs
// (http(s):// or data:) are returned untouched so remote/CDN media works too.
export const asset = (p) =>
  /^(https?:)?\/\//.test(p) || p.startsWith('data:')
    ? p
    : import.meta.env.BASE_URL + p.replace(/^\//, '')
