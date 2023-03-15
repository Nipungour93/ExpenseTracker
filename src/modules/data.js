import {Colors} from '../constants';

export const Transactions = [
  {id: 1, title: 'Milk Store', date: 'Fri 05 April 2023', price: '$475'},
  {id: 2, title: 'Milk Store', date: 'Fri 05 April 2023', price: '$475'},
  {id: 3, title: 'Milk Store', date: 'Fri 05 April 2023', price: '$475'},
  {id: 4, title: 'Milk Store', date: 'Fri 05 April 2023', price: '$475'},
  {id: 5, title: 'Milk Store', date: 'Fri 05 April 2023', price: '$475'},
  {id: 6, title: 'Milk Store', date: 'Fri 05 April 2023', price: '$475'},
  {id: 7, title: 'Milk Store', date: 'Fri 05 April 2023', price: '$475'},
];

export const Bardata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [0, 20, 40, 60, 80, 43],
    },
  ],
};

export const PieData = [
  {
    name: 'Food',
    percentage: 35,
    color: Colors.Black,
    legendFontColor: Colors.Black,
    legendFontSize: 15,
  },
  {
    name: 'Drinks',
    percentage: 20,
    color: Colors.Purple,
    legendFontColor: Colors.Purple,
    legendFontSize: 15,
  },
  {
    name: 'Food',
    percentage: 45,
    color: Colors.Orange,
    legendFontColor: Colors.Orange,
    legendFontSize: 15,
  },
];
export const History = [
  {
    id: 1,
    name: 'Tea',
    subTitle: 'with peter aderson',
    price: '50',
  },
  {
    id: 2,
    name: 'Coffee',
    subTitle: 'with peter aderson',
    price: '150',
  },
  {
    id: 3,
    name: 'Food and Drinks',
    subTitle: 'with peter aderson',
    price: '70',
  },
];

export const Reminder = [
  {
    id: 1,
    name: 'Electricity Bill',
    iconName: 'electricity',
    subTitle: '28 Feb 2023',
    price: '50',
  },
  {
    id: 2,
    name: 'House Rent',
    iconName: 'home',
    subTitle: '28 Feb 2023',
    price: '1500',
  },
  {
    id: 3,
    name: 'Phone Recharge',
    iconName: 'phone',
    subTitle: '28 Feb 2023',
    price: '70',
  },
];
