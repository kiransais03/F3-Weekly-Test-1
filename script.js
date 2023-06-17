
let adduserbtn = document.getElementById("btnadd");
adduserbtn.addEventListener("click",func1);

let arr=[];

function func1 (event) {
    console.log("okook")
    event.preventDefault();

    let name=document.getElementById("name").value ;
    let profession=document.getElementById("profession").value;
    let age=document.getElementById("age").value;

    // let inputdiv = doucment.getElementsByClassName("inputdiv")[0];
    let commentdiv=document.getElementById("commentdiv");
   
    if(name.length==0 || profession.length==0 || age.length==0)
    {
      commentdiv.innerHTML="";
      let div=document.createElement("div");
      div.id="commentred";
      div.innerText="Error : Please Make sure All the fields are filled before adding in an employee !";
      commentdiv.append(div);
      return ;
    }
    else {
        commentdiv.innerHTML="";
      let div=document.createElement("div");
      div.id="commentgreen";
      div.innerText="Success : Employee Added!";
      commentdiv.append(div);
    }

    const obj ={nAme:name,proFession:profession,aGe:age};
    arr.push(obj);

    let para=document.getElementById("para");
    if(arr.length===1)
    {
        console.log("para remove");
        para.remove();
    }

    let empdiv = document.getElementById("employeeslistdiv");
    let blkdiv = document.createElement("div");
    blkdiv.classList.add("blkdivclass");
    blkdiv.innerHTML=`<div>${arr.length}</div>
                      <div>Name:${name}</div>
                      <div>Profession:${profession}</div>
                      <div>Age:${age}</div>
                        <button class="delbtn">Delete User</button>`

                      
    empdiv.append(blkdiv);
    blkdiv.querySelector(".delbtn").addEventListener("click", () => {
        deleteEmployee(blkdiv)});

        function deleteEmployee(blkdiv1) {
             blkdiv1.remove();
             let numberindex = blkdiv1.getElementsByTagName("div")[0].innerText;
             console.log("Deleting Number",numberindex);
             arr.splice(numberindex, 1);
             console.log(arr.length);
        }
}

