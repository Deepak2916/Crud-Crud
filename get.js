var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);


function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;
  var newItem2=document.getElementById('item2').value
  var li = document.createElement('li');
  var spam1=document.createElement('spam')
  spam1.appendChild(document.createTextNode(newItem))
  var spam2=document.createElement('spam')
  spam2.appendChild(document.createTextNode(newItem2))
  li.className = 'list-group-item';
  li.appendChild(spam1);
  li.appendChild(spam2)
  var edit = document.createElement('button')

  var deleteBtn = document.createElement('button');


edit.className="editbtn edit"
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

edit.appendChild(document.createTextNode("edit"))
  deleteBtn.appendChild(document.createTextNode('delet'));


li.appendChild(edit)

  li.appendChild(deleteBtn);



  itemList.appendChild(li);
  let obj={"name":newItem,
"mail":newItem2}
//  let myObj = JSON.stringify(obj)
// localStorage.setItem(`myObj${newItem2}`,myObj)
axios.post("https://crudcrud.com/api/8fafe26169484c3a9a9e4cbe7f49b594/myData",obj)
.then((res)=>{
//   console.log(res)
})
.catch(err=> console.log(err))

}

window.addEventListener("DOMContentLoaded",()=>{
     axios.get("https://crudcrud.com/api/8fafe26169484c3a9a9e4cbe7f49b594/myData")
          .then((res)=> {
               // console.log(res)
               for(var i=0;i<res.data.length;i++){
                    showUser(res.data[i])
               }
          })
          .catch((err)=>console.log(err))
})

function showUser(user){
     document.getElementById('item').value=''
     document.getElementById('item2').value=''
     // if(localStorage.getItem(user.mail)!==null){

     // }
  var li = document.createElement('li');
  var spam1=document.createElement('spam')
  spam1.appendChild(document.createTextNode(user.name))
  var spam2=document.createElement('spam')
  spam2.appendChild(document.createTextNode(user.mail))
  li.className = 'list-group-item';
  li.appendChild(spam1);
  li.appendChild(spam2)
  var edit = document.createElement('button')

  var deleteBtn = document.createElement('button');


edit.className="editbtn edit"
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

edit.appendChild(document.createTextNode("edit"))
  deleteBtn.appendChild(document.createTextNode('delet'));


li.appendChild(edit)

  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

function removeItem(e){
     var li = e.target.parentElement; 
  if(e.target.classList.contains('edit')){
     let n=li.children[0].textContent
     let e=li.children[1].textContent
     document.getElementById('item').value=n
     document.getElementById('item2').value=e
     itemList.removeChild(li);
  }
  else if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}