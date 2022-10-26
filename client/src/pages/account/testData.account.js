/**
   *  DUMMY INFORMATION FOR PAGES THAT INVOLVE MULTIPLE ITEMS OF DATA
   */
export const testLeaders = [
  {
    position: 1,
    points: 100,
    user: {
      name: 'Stephen',
      image: '../../assets/header/group.png',
      link: '/'
    }
  },
  {
    position: 2,
    points: 90,
    user: {
      name: 'Step',
      image: '../../assets/header/group.png',
      link: '/'
    }
  },
  {
    position: 3,
    points: 80,
    user: {
      name: 'Phen',
      image: '../../assets/header/group.png',
      link: '/'
    }
  },
  {
    position: 4,
    points: 50,
    user: {
      name: 'Random Guy',
      image: '../../assets/header/group.png',
      link: '/'
    }
  }
];

export const testMissions = [
  {
    title: 'Play Arcade Games',
    image: '../../assets/header/group.png',
    link: '/'
  },
  {
    title: 'Share Freedom on Social Media',
    image: '../../assets/header/group.png',
    link: '/'
  },
  {
    title: 'Share Freedom Partnerships',
    image: '../../assets/header/group.png',
    link: '/'
  }
];

export const testOrders = [
  {
    orderNumber: '1001',
    items: [
      {
        itemName: 'High-quality rose bouquet',
        itemPrice: 23.00,
        itemImage: '../../assets/header/group.png',
        itemLink: '/',
        itemAmount: 2
      },
      {
        itemName: 'Batteries',
        itemPrice: 15.00,
        itemImage: '../../assets/header/group.png',
        itemLink: '/',
        itemAmount: 3
      },
      {
        itemName: '24-pack soda',
        itemPrice: 14.00,
        itemImage: '../../assets/header/group.png',
        itemLink: '/',
        itemQuantity: 1
      }
    ],
    orderDate: '2022-10-12',
    shipped: true,
    shippedDate: '2022-10-13',
    delivered: true,
    deliveryEarliestDate: '2022-10-15',
    deliveryLatestDate: '2022-10-17',
    returned: false,
    tracked: false,
    total: 52.00,
    addr: '1234 N 15th Street',
    link: '/',
    payment: 'Credit Card ending in 1234'
  },
  {
    orderNumber: '1002',
    items: [
      {
        itemName: 'Makeup kit',
        itemPrice: 34.00,
        itemImage: '../../assets/header/group.png',
        itemLink: '/',
        itemAmount: 2
      },
      {
        itemName: 'Organic orange juice',
        itemPrice: 8.00,
        itemImage: '../../assets/header/group.png',
        itemLink: '/',
        itemAmount: 1
      },
      {
        itemName: 'High-quality carnation bouquet',
        itemPrice: 30.00,
        itemImage: '../../assets/header/group.png',
        itemLink: '/',
        itemAmount: 2
      }
    ],
    orderDate: '2022-10-17',
    shipped: true,
    shippedDate: '2022-10-19',
    delivered: false,
    deliveryEarliestDate: '2022-10-24',
    deliveryLatestDate: '2022-10-27',
    returned: false,
    tracked: true,
    total: 72.00,
    addr: '9876 S 12th Avenue',
    link: '/',
    payment: null
  }
];

export const testLikes = [
  {
    name: 'Bouquet of roses',
    description: 'They are... roses',
    image: '../../assets/header/group.png',
    link: '/'
  },
  {
    name: 'Kindle Fire 7',
    description: 'Great for reading',
    image: '../../assets/header/group.png',
    link: '/'
  },
  {
    name: 'Car',
    description: 'Very expensive, vroom vroom',
    image: '../../assets/header/group.png',
    link: '/'
  },
];
