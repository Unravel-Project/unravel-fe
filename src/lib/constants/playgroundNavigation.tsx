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
        menuName: 'Button',
        url: '/playground/components/button',
      },
      {
        menuName: 'Input Search',
        url: '/playground/components/input-search',
      },
      {
        menuName: 'Skeleton',
        url: '/playground/components/skeleton',
      },
      {
        menuName: 'Card',
        url: '/playground/components/card',
      },
      {
        menuName: 'Separator',
        url: '/playground/components/separator',
      },
      {
        menuName: 'Tooltip',
        url: '/playground/components/tooltip',
      },
    ]
  },
  {
    menuName: 'Zustand',
    url: '/playground/zustand',
  },
  {
    menuName: 'React Query',
    url: '/playground/react-query',
  },
];