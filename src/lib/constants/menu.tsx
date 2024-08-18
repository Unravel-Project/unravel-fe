export const MENU:MenuProps[] = [
  {
    menuName: 'Directories',
    url: '#',
    description: "Explore our curated list of the best places, from cafe to itinaries. Discover new places and enhance your experience about Malang.",
    children: [
      {
        menuName: 'Food & Beverages',
        url: '#',
        children: [
          {
            menuName: 'Restaurant',
            url: '#',
          },{
            menuName: 'Cafe',
            url: '#',
          },{
            menuName: 'Street Food',
            url: '#',
          },
        ],
      },{
        menuName: 'Itinaries',
        url: '#',
        children: [
          {
            menuName: 'Hotel',
            url: '#',
          },{
            menuName: 'Tour Guides',
            url: '#',
          },{
            menuName: 'Rentals',
            url: '#',
          },
        ],
      },{
        menuName: 'Healthcare',
        url: '#',
        children: [
          {
            menuName: 'Hospitals',
            url: '#',
          },{
            menuName: 'Dentists',
            url: '#',
          },{
            menuName: 'Pharmacies',
            url: '#',
          },
        ],
      },
    ],
  },{
    menuName: 'About Us',
    url: '#',
  },{
    menuName: 'Contact Us',
    url: '#',
  }
];