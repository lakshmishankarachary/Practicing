class parent{
    p_assets=20000;
    get_qua(){
        console.log("parent class method")
    }
}
class child extends parent{
    p_maore_assets=300000;
    get_details(){
        console.log("child classn executed")
    }
}
 let obj=new child()
 console.log(obj)
 obj.get_qua();
 obj.get_details();
 