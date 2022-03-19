class parent{
    min=500;
   constructor(amount){
       this.amount=amount;
   }
}
class child extends parent{
    constructor(id,name,email,amount){
        super(amount);
       this.id=id;
       this.name=name;
       this.email=email
    }
}
let c1=new child(100,"lak", "lak@gmail.comm",5000)
console.log(c1)