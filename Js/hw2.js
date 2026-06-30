let m=document.getElementById("main");
m.style.border="2px solid red";
m.style.background='black';
m.style.height='760px';
m.style.width='100%';


let mc=document.getElementById("mainc");
// mc.style.border="2px solid red";
mc.style.background='red';
// mc.style.height='Fitcontent';
mc.style.width='50%';
mc.style.margin="auto";
mc.style.marginTop = "16%";
mc.style.textAlign = "center";
mc.style.borderRadius = "20px";
mc.style.padding = "20px";


let s=document.getElementById("sb");
// s.style.border="2px solid red";
s.style.display="flex";
s.style.height="60px";
s.style.width="400px";
s.style.textAlign='center';
s.style.margin="auto";

let e=document.getElementById("e");
e.style.height="55px";
e.style.width="300px";
e.style.alignItems='center';
e.style.fontSize='16px';


let b=document.getElementById('btn');
b.style.height='60px';
b.style.width='100px';
b.style.background='red';
b.style.fontSize='16px';
b.addEventListener("click",function(){
    // alert("enter first");
    m.style.background="white";
})