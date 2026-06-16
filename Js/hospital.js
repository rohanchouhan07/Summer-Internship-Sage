
const prompt=require("prompt-sync")();
console.log("Hospital Management system ");

function pd (){
    let name = prompt("Enter your name : ");
    let Age = prompt("Enter your Age : ");
    let g = prompt("Enter your Gender : ");
    let Blood = prompt("Enter your blood Group ( Optional ) : ");
    let contact = prompt("Enter your Contact num :");

    if(!name || !Age || !g || !contact){
        console.log("==DDeatils missing ==");
        return;
    }
    if(!Blood ){
        console.log(" \n blood group Not provided");
    }
            console.log("==Petient details==");
            console.log("Hello, " + name + "!");
            console.log("Age : " + Age + " Years");
            console.log("Gender : " + g );
            console.log("Blood group : " + Blood  );
            console.log("Contact Num : " + contact  );
}

pd();
