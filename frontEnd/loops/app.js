let btn=document.querySelector("button");

for (btns of btn){
    btn.onclick=sayHello;
    console.dir(btns);
}

function sayHello(){
    alert("hello");
}