/* //BY ID
let headTitle = document.getElementById("header-title");
//headTitle.textContent="aniket";
console.log(headTitle);
let a=document.getElementById("desh");
a.textContent="ADD ITEM"
a.style.color="green";
a.style.fontWeight="bold";
console.log(a)

//BY CLASS NAME

let b=document.getElementsByClassName("list-group-item");
console.log(b)
console.log(b[2])
//by using single item individually'
/*b[0].style.fontWeight="bold";
b[1].style.fontWeight="bold";
b[2].style.fontWeight="bold";
b[3].style.fontWeight="bold";
//for igger list use for loop
for(let i=0;i<b.length;i++)
{
    b[i].style.fontWeight="bold"
}
b[2].style.backgroundColor="lightgreen";


//By TAG NAME
let c=document.getElementsByTagName("li");
console.log(c[4])
c[4].style.color="blue"
c[4].style.backgroundColor="lightgreen";
c[4].style.fontWeight="bold"

//Query Selector
let head=document.querySelector("#main-header");
head.style.borderBottom="solid 5px yellow"
let submit=document.querySelector('input[type="submit"]');
submit.value="SEND"
let input=document.querySelector("input");
input.value="add text"
let list=document.querySelector(".list-group-item")
list.style.color="red"
let lastitem=document.querySelector(".list-group-item:nth-child(2)");
lastitem.style.backgroundColor="yellow"
let invisible=document.querySelector(".list-group-item:nth-child(3)");
invisible.style.color="lightgreen"

//Query Seclector All
let lis=document.querySelectorAll(".list-group-item")
console.log(lis)
lis[1].style.color="pink"
/*for(let i=0;i<lis.length;i++)
{
    if(i%2===0)
    {
        lis[i].style.backgroundColor="lightgreen";
    }
}
//by youtuber
 let odd=document.querySelectorAll("li:nth-child(odd)")
let even=document.querySelectorAll("li:nth-child(even)")
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="lightblue"
    //even[i].style.backgroundColor="grey"
}  */

/* let itemlist=document.querySelector("#items")
//parentnode && parent element are same
console.log(itemlist.parentNode)
itemlist.parentNode.style.backgroundColor="lightgrey"
//parent element
console.log(itemlist.parentElement)
//child node
console.log(itemlist.childNodes)
//children
console.log(itemlist.children)
//to access particular child
console.log(itemlist.children[1])
//first child
console.log(itemlist.firstChild)
//first element child
console.log(itemlist.firstElementChild)
//last child
console.log(itemlist.lastChild)
//last elemt child
console.log(itemlist.lastElementChild)
//cretae child

//next sibling
console.log(itemlist.nextSibling)
//next elemt sibling
console.log(itemlist.nextElementSibling)
//previuos sibling
console.log(itemlist.previousSibling)
//previous elemt sibling
console.log(itemlist.previousElementSibling)
//create element div
let d=document.createElement("div")
d.className="hello"
d.id="bye"
//set attribute
d.setAttribute("value","aniket")
//create new nnode div insilde div
let newd=document.createTextNode("Deshmukh")
//append child i.e to add newd to d
d.appendChild(newd)

let continer=document.querySelector("header .container")
let h2=document.querySelector("header h1")
console.log(d)
continer.insertBefore(d,h2)

let e=document.querySelector("ul .list-group-item")
let e1=document.querySelector("ul li")
e.insertBefore(d,e1) */


var form = document.getElementById('addForm');
//console.log(form)
var itemList = document.getElementById('items');
//console.log(itemList)
var filter = document.getElementById('filter');
//console.log(filter)
//delete event
itemList.addEventListener('click' ,removeItem)
//submit event aso caling fuction when we clicked submit
form.addEventListener('submit', addItem);
//filter event
filter.addEventListener('keyup' ,filterItems)
//create function and passing event e parameter
function addItem(e){
    e.preventDefault();
    //console.log(1)
    // Get input value
    var newItem = document.getElementById('item').value;
    //console.log(newItem)
    //create new li element
    var li=document.createElement('li')
    //add class name
    li.className='list-group-item'
    //console.log(li)
    //add text node 
    li.appendChild(document.createTextNode(newItem))
    //create delete button
    var deletebtn=document.createElement('button')
    //addd class to delete tn
    deletebtn.className='btn btn-danger btn-sm float-right delete'
    //add text node
    deletebtn.appendChild(document.createTextNode('X'))
    li.appendChild(deletebtn)
    //since we are appending it to list
    //adding edit button
    var editbtn=document.createElement('button')
    editbtn.className='btn btn-danger btn-sm float-right delete'
    editbtn.appendChild(document.createTextNode('edit'))
    li.appendChild(editbtn)
    itemList.appendChild(li)
}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are U Sure'))
        {
            let li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text)
    //get list of items
    var items=itemList.getElementsByTagName('li');
    //convert html cllection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
       // console.log(itemName)
       if(itemName.toLowerCase().indexOf(text)!=-1)
       {
        item.style.display='block'
       }
       else
       {
        item.style.display='none'
       }
    });

}