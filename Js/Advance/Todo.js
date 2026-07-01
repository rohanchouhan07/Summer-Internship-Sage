
// // let r=document.getElementById("theme")
// button.addEventListener("click",function(){
// document.body.classList.toggle("dark")
// });
let input=document.getElementById("input");
let list=document.getElementById("lst");
let deleteButton=document.getElementById("btn1");
let updateBtn=document.getElementById("btn0");
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    let task=input.value;
    if(task.trim()==="")return;
    let li=document.createElement("li");
    li.innerText=task;
    list.appendChild(li);
    input.value="";
})
deleteButton.addEventListener("click",function(){
    list.lastElementChild.remove();
})
updateBtn.addEventListener("click",function(){
    let newtesk=input.value;
    if(newtesk.trim()==="")return;
    // let li=document.createElement("li");
    li.innerText=newtesk;
    list.appendChild(li);
    input.value="";
    
    
})

