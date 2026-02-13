export const siteMapRoutes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      sections: [
        { path: 'introduction', name: 'Introduction' },
        { path: 'experience', name: 'Experience' },
        { path: 'skills', name: 'Skills' },
        { path: 'education', name: 'Education' },
      ],
    },
  },
  {
    path: '/azores',
    name: 'Where I am from',
    meta: {
      sections: [
        { path: 'introduction', name: 'Introduction' },
        { path: 'suggestions', name: 'Suggestions' },
      ],
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      sections: [],
    },
  },
  {
    path: '/home',
    redirect: '/',
  },
]