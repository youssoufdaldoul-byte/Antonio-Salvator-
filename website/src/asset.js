// MAISON LUMIÈRE — resolve public assets against the deploy base path
// (works at "/" in dev and under "/<repo>/" on GitHub Pages).
export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, '')
