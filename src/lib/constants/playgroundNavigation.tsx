export const PLAYGROUND_NAVIGATIONS:MenuProps[] = [
  {
    menuName: 'Colors',
    url: '/playground/colors',
  },
  {
    menuName: 'Icons',
    url: '/playground/icons',
  },
  {
    menuName: 'Components',
    url: '#',
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