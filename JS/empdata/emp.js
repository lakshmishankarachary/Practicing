let employees=[{name:"lak",sal:45000,id:101},
         {name:"rav",sal:55000,id:102},
         {name:"san",sal:65000,id:103}]

         function execute(){
            let rows="";
             for(var i=0;i<=employees.length-1;i++){
            rows=rows+
            `<tr>
             <td>${employees[i].name}</td>
             <td>${employees[i].sal}</td>
             <td>${employees[i].id}</td>
             </tr>`;
             document.getElementById("abc").innerHTML=rows;
         }
        }