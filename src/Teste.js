const array = [0, 1, 2, 3, 4, 5];

const newValue = [...array];

console.log(array);
console.log(newValue);

const arrayObj = [{
  item: 'carro',
  amount: 3,
  price: 40,
},
{
  item: 'moto',
  amount: 4,
  price: 70,
},
];

const otherarr = [{
  item: 'avião',
  amount: 1,
  price: 100,
}];

const newArrayObj = [...arrayObj, ...otherarr];

console.log(newArrayObj);
