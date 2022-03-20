let employees=[{Id:101,Name:"lak",Salary:45000},
               {Id:102,Name:"san",Salary:55000},
               {Id:103,Name:"man",Salary:65000},
               {Id:104,Name:"sha",Salary:75000}]
function execute(){
    console.log("test case")
    let rows="";
    employees.map((emp,index)=>{
        console.log("test")
        rows=rows+
        `<tr>
        <td>${emp.Id}</td>   
        <td>${emp.Name}</td>   
        <td>${emp.Salary}</td>
        <tr>`   
           document.getElementById("abc").innerHTML=rows
    })
    
}