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
    name:'Rohan',
    greet(){
        console.log("hello ")
    }
}
obj.greet();

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

n='rohan'
console.log("hello"+n)
console.log(`hello ${n}`)