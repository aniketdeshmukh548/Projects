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
b[0].style.fontWeight="bold";
b[1].style.fontWeight="bold";
b[2].style.fontWeight="bold";
b[3].style.fontWeight="bold";
b[2].style.backgroundColor="lightgreen";
