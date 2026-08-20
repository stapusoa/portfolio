// Route links use react-router <Link>; hash targets on the home page use a
// plain <a> so the browser handles anchor scrolling (incl. cross-page).
export const NAV = [
  { label: 'work', href: '/#work', hash: true },
  { label: 'services', href: '/services', hash: false },
  { label: 'resources', href: '/resources', hash: false },
]