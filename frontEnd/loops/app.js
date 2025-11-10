let nums=[1,2,3,4,789]
let finalVal=nums.reduce((res,el)=>{
        console.log(res);
        return res+el;

})
;
console.log(finalVal);