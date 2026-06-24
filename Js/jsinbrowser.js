// ! 
let head=document.getElementById("h");
head.innerText="Mera naam rohan h ";
head.style.color="white";
head.style.background="black";

// !creating element by js
let newpara=document.createElement("h2")
newpara.innerText="hello";
newpara.style.color="blue";
document.body.appendChild(newpara); 
newpara.remove()


// !events
// eveenet are the action that run on browser 
let b = document.getElementById("btn");

b.addEventListener("click", function(){
    b.style.color="red";
    alert("rohan")
})
