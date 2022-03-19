const bcrypt=require("bcryptjs")
let user={name:"lak",
          email:"lak@gmail.com",
          password:"12345",
          credit_card:"12345678"}
 let salt=bcrypt.genSaltSync(10)
 let newpassword=bcrypt.hashSync(user.password,salt) 
 let newcreditcard=bcrypt.hashSync(user.credit_card,salt)
 console.log(newpassword)  
 console.log(newcreditcard) 
 let new_user={...user,password:newpassword,credit_card:newcreditcard}    
 console.log(new_user)
 let result=bcrypt.compareSync("12345",new_user.password)
 console.log(result)
 if(result){
     console.log("login successfull")
 }
     else
     {
     console.log("login failed")
}

 