let id=setInterval(()=>{
        console.log("Hello World!")
},2000);
console.log(id);

let id2=setTimeout(()=>{
clearInterval(id);
console.log("The interval has been ran");
},10000);

console.log(id2);
