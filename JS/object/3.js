let employee={name:"lak",
                sal:45000,
getDetails:()=>{
    console.log("is a func")
},
getSalary:function(){
    return this.sal
}
}
console.log(employee.name)
employee.getDetails()
console.log(employee.getSalary())
