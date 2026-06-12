// ! Top performing Students

const details=[{name:"John",marks:[80,90,85]},{name:"Emma",marks:[95,92,98]},{name:"John",marks:[60,70,65]}
]

const avg=details.map(student =>
    {
    const total=student.marks.reduce((sum,mark)=> sum+mark,0);
    return{
        name: student.name,
        average: total/student.marks.length
    };
});


console.log(avg);


sales=[ 
{ category: "Electronics", amount: 500 }, 
{ category: "Books", amount: 100 }, 
{ category: "Electronics", amount: 300 }, 
{ category: "Clothing", amount: 200 } ];

const totalRevenue = sales.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + item.amount;
  return acc;
}, {});

console.log(totalRevenue);


const text = "The fox is quick. The fox is smart." ;
const wordsArray = text.replace(/[^\w\s]/g, '').toLowerCase().split(/\s+/);
const targetWord = "fox";
const count = wordsArray.filter(word => word === targetWord).length;

console.log(wordsArray);
console.log(`The word "${targetWord}" appears ${count} times.`);

const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

const salaries = employees.map(emp => emp.salary);
console.log(salaries); 

const totalSalary = salaries.reduce((sum, currentSalary) => sum + currentSalary, 0);
console.log(totalSalary); 


const inventory = [ 
  { name: "Laptop", stock: 5 }, 
  { name: "Phone", stock: 0 }, 
  { name: "Tablet", stock: 10 } 
];

const availableProducts = inventory
  .filter(item => item.stock > 0)
  .map(item => item.name);
console.log(availableProducts); 