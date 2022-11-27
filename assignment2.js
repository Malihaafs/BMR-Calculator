function createTable()
{
  create_tbl();
}

function create_tbl(){
  rn = window.prompt("Input number of rows", 1);
  cn = window.prompt("Input number of columns",1);
  
 for(let r=0;r<parseInt(rn,10);r++)
  {
   let x=document.getElementById('myTable').insertRow(r);
   let obj = document.getElementById('myTable');
   obj.setAttribute("border", "2");
   for(let c=0;c<parseInt(cn,10);c++)  
    {
     let y=  x.insertCell(c);
     y.innerHTML=(r+1)+","+(c+1); 
    }
   }
}