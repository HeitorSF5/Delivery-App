const dataMocked = [{
  id: 1,
  userId: 3,
  sellerId: 2,
  status: 'Pendente',
  deliveryNumber: '12345',
  deliveryAddress: 'Rua dos bobos, 0',
  totalPrice: 'R$ 170,00',
  salesDate: '01/01/2020',
  orders: [{
    id: 1,
    name: 'Produto 6',
    price: 10,
    saleProducts: {
      quantity: 2,
    },
  },
  {
    id: 2,
    name: 'Produto 3',
    price: 50,
    saleProducts: {
      quantity: 3,
    },
  },
  ],
},
{
  id: 2,
  userId: 3,
  sellerId: 2,
  status: 'Entregue',
  deliveryNumber: '235',
  deliveryAddress: 'Rua dos bobos, 0',
  totalPrice: 'R$ 140,00',
  salesDate: '01/01/2020',
  orders: [{
    id: 1,
    name: 'Produto 1',
    price: 10,
    saleProducts: {
      quantity: 4,
    },
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 20,
    saleProducts: {
      quantity: 5,
    },
  },
  ],
},
];

export default dataMocked;
