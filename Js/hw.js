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
  .filter(item => item.stock == 0)
  .map(item => item.name);
console.log(availableProducts); 

const inStockProducts = inventory.filter(item => item.stock > 0);
console.log(inStockProducts);

const posts = [ 
  { postId: 1, likes: 100 }, 
  { postId: 2, likes: 200 } 
];

const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
console.log(totalLikes); 

movie=[  
    { title: "Movie A", rating: 8.5 },
     { title: "Movie B", rating: 6.0 } ]

const ratinggthan8 = movie.filter(item=>item.rating >8);
console.log(ratinggthan8);

const titles=movie.map(t =>t.title);
console.log(titles);


csmt=[  
    { customer: "John", amount: 50000 }, 
    { customer: "Emma", amount: 20000 } ];


const s = csmt.map(emp => emp.amount)
const ts = s.reduce((sum, currentSalary) => sum + currentSalary, 0);
console.log(ts);

credit=[  { type: "credit", amount: 1000 }, { type: "debit", amount: 300 }, { type: "credit", amount: 500 } ]
const cd=credit.map(emp=>emp.amount)
const total =cd.reduce((sum,item)=>sum+item,0)
console.log(total)

login=[  { user: "A", action: "login" }, { user: "B", action: "logout" }, { user: "C", action: "login" } ];

const ma=login.filter(item=>item.action=="login");
console.log(ma);

github=[  { repo: "A", stars: 100 }, { repo: "B", stars: 200 } ];

const total1=github.map(emp=>emp.stars);
const cout=total1.reduce((sum,item)=>sum+item,0);
console.log(cout);

product_list=[ { name: "Laptop", price: 50000 }, { name: "Phone", price: 20000 }, { name: "Tablet", price: 15000 } ];
const tt=product_list.map(emp=>emp.price)
const oo=tt.reduce((sum,item)=>sum+item,0);
console.log(oo);