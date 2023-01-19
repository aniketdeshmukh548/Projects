//BY ID
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
b[3].style.fontWeight="bold";*/
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
}*/
//by youtuber
let odd=document.querySelectorAll("li:nth-child(odd)")
let even=document.querySelectorAll("li:nth-child(even)")
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="lightblue"
    even[i].style.backgroundColor="darkgrey"
}