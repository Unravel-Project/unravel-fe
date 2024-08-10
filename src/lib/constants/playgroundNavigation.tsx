export const PLAYGROUND_NAVIGATIONS:MenuProps[] = [
  {
    menuName: 'Playground',
    url: '/playground',
  },
  {
    menuName: 'Colors',
    url: '/playground/colors',
  },
  {
    menuName: 'Components',
    url: '/playground/components',
    children: [
      {
        menuName: 'Breadcrumb',
        url: '/playground/components/breadcrumb',
      },
      {
        menuName: 'Skeleton',
        url: '/playground/components/skeleton',
      },
    ]
  },
];