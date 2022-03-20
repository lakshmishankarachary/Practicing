let doTask=new Promise((resolve,reject)=>{
let flag=false;
if(flag){
    resolve("success")
}
else{
    reject("failure")
}
})
doTask
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
})
