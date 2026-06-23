// !creating obj from class

class std1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    // !adding methods
    study(){
        console.log(`${this.name} is studying js ${this.age} Year old.`);
    }
}
let s1=new std1('Rohan',22);
let s2=new std1('John',25);
let s3=new std1('Divya',18);
let s4=new std1('Sem',12);

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
s1.study();
s2.study();

// ! inheritance
class animal{
    eat(){
        console.log("eating")
    }
    sleettt(){
        console.log("Sleeping")
    }
}
class dog extends animal{
    bark(){
        console.log("Barking")
    }
    
}
let dog1=new dog();
dog1.eat();
dog1.sleettt();
dog1.bark();

// !super 
class animal1{
    constructor(name){
        this.name=name;

    }
}
class q extends animal1{
    constructor (name,breed) {
        super(name);
        this.breed=breed;
    }
}
const c=new q("Divya","cat")
const c1=new q("Rohan","Lion")
console.log(c)
console.log(c1)


// !method overriding
class od{
    eat(){
        console.log("eating")
    }
    makesound(){
        console.log("BHaoo Bhaoo")
    }
}
class dogg extends od{
    bark(){
        console.log("Barking")
    }
    makesound(){
        console.log("Mieowwwww mieowwwww")
    }
    
}
let dog11=new dogg();
dog11.eat();
dog11.bark();
dog11.makesound();


// !medthod over
class stds{
    constructor(name,id){
        this.name=name;
        this.id=id;

    }
    study(name1){
        console.log(`${name1} is studing`)
    }
}
class codeing extends stds{
    constructor(name,id){
        super(name,id);
    }
    work(){
        console.log(`${this.name} is codding id ${this.id}`)
    }
}

let g=new codeing("Rohan",101);
g.study("Divya");
g.work();
