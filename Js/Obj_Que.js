// !Que 1
console.log("Que=1")
const names=["gagan","ishan","yogesh"]
let r = names.map(name=>name.toUpperCase())
console.log(r,"\n")

// !Que 2
console.log("Que=2")
const products=[
    {id:1,name:"Laptop"},
    {id:2,name:"Phone"},
    {id:3,name:"Tablet"}
]
const pd=products.map(x=>x.name)
console.log(pd,"\n")

// !Que 3
console.log("Que 3")
const word=["apple","banana","cat","elephnt","dog"];
let wd=word.filter(x=>x.length >5)
console.log(wd,"\n")

// !Que 4
console.log("Que 4")
const users=[
    {name:"A",age:16},
    {name:"B",age:22},
    {name:"C",age:19}
]
// let ur=users.filter(x=>x.age>18).map(v=>v.name);
let ur=users.filter(x=>x.age>18);
console.log(ur,"\n");

// !Que 5
console.log("Que 5");
const words=["hello","words","Javascrips"];
const w2=words.map(x=>x.length).reduce((sum,item)=>sum+item,0);
const w12=words.reduce((sum,item)=>sum+item.length,0);
console.log(w2);
console.log(w12,"\n");

// !Que 6
console.log("Que 6");
const nums=[1,2,3,4,5,6,7,8]
const ns=nums.filter(x=>x%2==0).map(x=>x*x)//.reduce((sum,x)=>sum+x,0)
console.log(ns,"\n");

// !Que 7
console.log("Que 7");
const employees=[
    {name:"A",salary:30000},
    {name:"B",salary:50000},
    {name:"C",salary:40000}
]
const emp=employees.reduce((sum,x)=>sum+x.salary,0)
console.log(emp,"\n")

// !Que 8
console.log("Que 8");
pass= 40;
const std_marks=[
    {name:"A",marks:35},
    {name:"B",marks:75},
    {name:"C",marks:45},
    {name:"D",marks:25}
]
const sm=std_marks.filter(x=>x.marks>pass).map(X=>X.name)
console.log(sm,"\n");

// !Que 9
console.log("Que 9")
const marks=[80,90,70,60]
let tt=marks.reduce((s,i)=>s+i,0)/marks.length
console.log(tt,"\n");

// !Que 10
console.log("Que 10")
const fruit=["apple","banana","apple","orange","banana","apple"];
// que 11