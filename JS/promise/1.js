let dotask=(success,failure)=>{
    let flag=false
    if(flag){
        success("working")
    }
    else{
        failure("not")
    }
}
dotask(
    (message)=>{
        console.log(message)
    },
    (error)=>{
        console.log(error)
    })
