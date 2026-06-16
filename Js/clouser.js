function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const clouser=outer();
clouser();
clouser();
clouser();
clouser();
clouser();



function bank(ib){
    let b=ib;
    let amount=0;
    return {
        deposit(amount){
            console.log("initial amount ::",b);
            b+=amount;
            console.log("deposited amount ::",amount);
            console.log("Total amount ::",b);

        },
        withdraw(amount){
            console.log("initial amount ::",b);
            b-=amount;
            console.log("Widthral amount ::",amount);
            console.log("total balance ::",b);
        }

    }
}
const c=bank(1000);
// c.deposit(100);
c.withdraw(20);



function multi(factor){
    return function (num){
        return factor*num;
    }
}
const t=multi(5);
console.log(t(10));


let fruit=['Apple','Banana','Mango'];//using array litrals
let fruits=new Array('Apple','Banana','Mango');//using array constructor
console.log(fruit[0]);
console.log(fruits[1]);

// length
console.log(fruits.length);
// push (add on last)
fruit.push('kiwi');

// unshift(add on first)
fruit.unshift('watermalon')
console.log(fruit)

// shift(remove on first)
fruit.shift()
console.log(fruit)

// include(check the element presence)
console.log(fruit.includes("Mango"))
console.log(fruit.includes("WaterMalon"))

// indexof(first index of presence element )
// (return -1 when no element founded)
console.log(fruit.indexOf("Mango"))

// join (saare element ko ek single string me daal deta h )
console.log(fruit.join(""))

// slice (returns the elennts of given range)
// !console.log(fruit.slice(1,3))

// splice (returns the elennts of given range)
// !console.log(fruit.splice(1,3))

console.log("\n")

// normal for loop
for(var i=0;i<fruit.length;i++){
    console.log(fruit[i]);

}
console.log("\n")

// for of loop
for (let j of fruit){
    console.log(j)
}
console.log("\n")

// for each loop
fruit.forEach(function(k){
    console.log(k);
})


// ? Advance array method 
// !MAP
// *SAARE ELEMENTS PR CONDITON APPLY KAREGA 

array=[10,8,33,4,5]

const double=array.map(function(x){
    return x*2;
})
console.log(double)

const doubledemo=array.map(x=>x*3);
console.log(doubledemo)

// !FILTER
// *Filter krke condition ke hisab se  elements nikal kr dega

const even=array.filter(function(x){
    return x%2==0;
})
console.log(even)


const odd=array.filter(x=>x%2!=0);
console.log(odd)

// !REDUCE
// * Store all elements in one variable

const p=array.reduce(function(sum,x){
    return sum+x;
})
console.log(p);


const r=array.reduce((sum,x)=>sum+x,100);
console.log(r)
const r1=array.reduce((sum,x)=>sum+x);
console.log(r1)

// !FIND
// *dhund kr dega 

const rp=array.find((x)=>x>20);
console.log(rp)

// !SOME
// *check the condition is true or not  
const rpk=array.some((x)=>x>2);
console.log(rpk)


// !EVERY
// *check the condition on all erray elemt  
const rpkh=array.every((x)=>x>3);
console.log(rpkh)

