let employees=[{id:100,name:"lak",salary:45000},
               {id:101,name:"man",salary:55000},
               {id:102,name:"san",salary:65000}]
  let createEmployee=(emp)=>{
      return new Promise((resolve,reject)=>{
          setTimeout(() => {
             employees.push(emp)
             let flag=true;
             flag?resolve("accepted"):reject("rejected")
          }, 3000);
      })
  }  
  let getEmployee=()=>{
      setTimeout(()=>{
          let rows=""
          employees.forEach((employee)=>{
              rows+=
                `<tr><td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.salary}</td>
                <tr/>`
          })
          document.getElementById("abc").innerHTML=rows;
      },1000)
  }
      
  createEmployee({id:103,name:"sha",salary:75000})
  .then((message)=>{
      console.log(message)
      getEmployee();
  })
  .catch((err)=>{
      console.log(err)
  })     