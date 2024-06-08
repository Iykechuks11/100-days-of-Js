const even = [2, 4, 6, 8, 10, 11, 17, 19];

const result = even.filter((n) => n % 2 == 0);
console.log(result);

const companies = [
  { name: 'company one', category: 'finance', start: 1980, end: 2004 },
  { name: 'company one', category: 'retail', start: 1986, end: 2001 },
  { name: 'company one', category: 'finance', start: 1991, end: 2003 },
  { name: 'company one', category: 'auto', start: 1981, end: 2005 },
  { name: 'company one', category: 'finance', start: 1981, end: 2004 },
];

const finance = companies.filter((company) => company.category == 'finance');
console.log(finance);
