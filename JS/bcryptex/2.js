const bcrypt=require("bcryptjs")
let user={name:"lak",
          password:"1234",
          cc:"123456"}
//  to convert to hash format         
let salt=bcrypt.genSaltSync(10)
let newpass=bcrypt.hashSync(user.password,salt)
let newcc=bcrypt.hashSync(user.cc,salt)
console.log(newpass)
console.log(newcc)
let new_user={...user,password:newpass,cc:newcc}
console.log(new_user)

// for camparing
let result=bcrypt.compareSync("1234",new_user.password)
console.log(result)
if(result){
    console.log("login success")
}
else{
    console.log("login failed")
}