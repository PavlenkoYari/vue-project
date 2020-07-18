window.byField = (field) => (a, b) => (a[field] > b[field] ? 1 : -1);

let users = [
  {
    name: 'Вася',
    surname: 'Иванов',
    age: 20
  },
  {
    name: 'Петя',
    surname: 'Чапаев',
    age: 25
  },
  {
    name: 'Маша',
    surname: 'Медведева',
    age: 18
  },
];

users.sort(byField('age'));



