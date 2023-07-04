var ul=document.getElementById("List")
var li;
var add=document.getElementById("Add")
add.addEventListener('click',addItem)
var remove=document.getElementById("Remove")
remove.addEventListener('click',removeItem)
function addItem(){
   var input=document.getElementById("input")
   var item=input.value;
   var text=document.createTextNode(item);
   if (item=='') {
    return false;
    
   }
   else{
     li=document.createElement("li")
     var check=document.createElement("input")
     check.type="checkbox"
     check.setAttribute('id','check')
     var label=document.createElement("label")
     ul.appendChild(label)
     li.appendChild(check)
     label.appendChild(text)
     li.appendChild(label)
     ul.insertBefore(li,ul.childNodes[0])
     li.setAttribute('id','mycheckbox')
   }
}
  setTimeout(()=>{
    li.setAttribute('id','mycheckbox')
  }, 10)
function removeItem(){
    li=ul.children
   for (let index = 0; index < li.length; index++) {
    while (li[index]&& li[index].children[0].checked) {
        ul.removeChild(li[index])
    }
    
   }

}