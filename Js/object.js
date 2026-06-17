// ! object
// An object stores data in akey-value pair

// ! why use objects?
    // To store multiple properties of a single object

let student={
    name:"Divya",
    age:22,
    city:"Indore"
}

console.log(student);

// ! Access using (.)
console.log(student.name);

// ! Access using []

console.log(student['age']);

// ! Add other property in student
    // If already exist then modify but if not exist then add
student.phone=7415500492;
console.log(student);

// ! Update existing data
student.name="Anushree"
console.log(student);

// ! Delete record

delete student.phone
console.log(student);



// ! Object Methods

let obj={
    name:'A',
    greet(){
        console.log("Hello");
    }
}

obj.greet();

// ! Loops in object

for(key in student){
    console.log(key,student[key]);
}



// ! nested object


let person={
    name:"Rohan",
    age:22,
    address:{
        city:"Indore",
        pincode:452009,
        state:"Madhya Pradesh"
    }
};

console.log(person)

//  Acces city from addres from person
console.log(person.address.city)
console.log(person["address"]["city"])

// ! Object in Array

let array=[a={name:"Divya"},b={name:"Shweta"},c={name:"Rita"}]
console.log(array)



// ! Add using  (`) string
let n="Roshni";
console.log("Hello"+ n +"How r u")
// use backtick(`) in place of quotes
console.log(`hello ${n}`)


//! Function with perameter
function greet1(name="Guest"){
    console.log(`hello ${name}`);
}
greet1()
greet1("Mahak")

// ! array Destruct
let [c1,d]=[10,20];
console.log(c1)
console.log(d)

// ! Object Destruct
let {name,age}=student;
console.log(student.name)
console.log(student.age)


// ! Spread Operator
// !Restuck / copy 1 array to another array
let arr1=[1,2,3,4,5];
let arr2=[...arr1];
console.log("Original Array",arr1)
console.log("Copied Array",arr2)


//!  Rest Operator

let nums=1;
function sum(...nums){
    nums++;
    return nums;
}

console.log(sum(nums));



// ! Enhanced object Literals
let name2="Ashish";
let student2={
    name2
}
console.log(student2)


// ! Object Manipulation
    // Merging Objects
let obj1={a1:1};
let obj2={b2:2};

let merged={...obj1,...obj2}

console.log("Object 1",obj1)
console.log("Objeect",obj2)
console.log("Merged [object 1 and object 2]:",merged)


//!  Object.keys()
    // Return all object keys

    console.log(Object.keys(student));

// !  Object.values()
    // Return all object values

    console.log(Object.values(student));

// !  Object.entries()
    // Return  array of all object pairs
    console.log(Object.entries(student));


// ! object.assign
    // copy from existing object
let copy=Object.assign({},student);
console.log(copy);

let copy1={...student};
console.log(copy1);


// ! in operator

console.log("name is available in student or not","name" in student)

// ! hasOwnProperty()
console.log(student.hasOwnProperty("name"));

// ! freeze
    // Freeze that object where we cannt add or any updation on that object
    

// console.log(Object.freeze(student))

// student.age=23   Cnanot update
console.log(student)


// ! Object.seal
    // Update ho skta h lekin add or delete nhi hoga

console.log(Object.seal(student))
student.age=23 
console.log(student)

// ! structuredClone()
// use for deep copy
const sdf=structuredClone(student);
console.log(sdf)