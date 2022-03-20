let sum=(a,b)=>{
    return a+b;
}
let sub=(a,b)=>{
    return a-b;
}
    function calculate(a,b,callback){
      return callback(a,b)
    }
let result=calculate(10,20,sum)
console.log(result)
let result1=calculate(30,20,sub)
console.log(result1)