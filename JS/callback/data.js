let employees=[{Id:100,Name:"lak",Sal:45000},
               {Id:101,Name:"man",Sal:55000},
               {Id:102,Name:"san",Sal:65000}]
 let createEmployee=(emp,callback)=>{
     setTimeout(()=>{
        employees.push(emp)
        callback();
     },3000)

 }  
 let getEmployees=()=>{
     setTimeout(()=>{
         let rows="";
         employees.forEach((employee)=>{
         rows=rows+
         `<tr><td>${employee.Id}</td>
                  <td>${employee.Name}</td>
                   <td>${employee.Sal}</td>
          </tr>`
         })
         document.getElementById("abc").innerHTML=rows;
     },1000)
 } 
 createEmployee({Id:103,Name:"sha",Sal:75000},getEmployees) 
 