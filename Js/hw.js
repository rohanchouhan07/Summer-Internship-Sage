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
hp=Math.max(...tt)
console.log(hp)

Even_Numbers =[1, 2, 3, 4, 5, 6];

const en=Even_Numbers.map(emp=>emp.Even_Numbers)
// if(en%2==0){
//     console.log(en)
// }
for(i of Even_Numbers){
    if(i%2==0){
        console.log('only even',i);
    }
} 
for(i of Even_Numbers){
    if(i%2==0){
        console.log('their squares',i*i);
    }
} 

Student_Marks=[45, 80, 60, 90, 30];
const s1=Student_Marks.filter(gg=>gg> 50);
console.log(s1);
const avg2=Student_Marks.map(item=>item);
const total7=avg2.reduce((sum,item)=>sum+item,0);
const length=avg2.length
console.log('Avg= ',total7/length)


Shopping_Cart =[  { item: "Book", price: 200 }, { item: "Pen", price: 20 }, { item: "Bag", price: 500 } ];
const ff=Shopping_Cart.map(item=>item.price);
const t5=ff.reduce((sum,item)=>sum+item,0)
console.log('total= ',t5);

Names_List= ["john", "emma", "alex"];
const toupp=Names_List.map(name=>name.toUpperCase());
console.log(toupp);

Numbers_Sum =[10, 20, 30, 40];
const t6=Numbers_Sum.map(item=>item);
const ans=t6.reduce((sum,item)=>sum+item,0) ;
console.log(ans);



Adult =[  { name: "John", age: 25 }, { name: "Emma", age: 16 }, { name: "Alex", age: 20 } ];

const aaa= Adult.filter(item=>item.age >18);
console.log(aaa);



const products = [ 
  { name: "Laptop", price: 50000 }, 
  { name: "Phone", price: 20000 } 
];
const discountedProducts = products.map(product => {
  return {
    name: product.name,
    price: product.price * 0.90 
  };
});
console.log(discountedProducts);
const updatedPricesOnly = discountedProducts.map(p => p.price);
console.log(updatedPricesOnly);


Exam = [  { name: "John", marks: 80 }, { name: "Emma", marks: 40 }, { name: "Alex", marks: 70 } ];


const examm=Exam.map(item=>{
    return {
        name:item.name,
        marks:item.marks >=50
    }
});
console.log(examm)
