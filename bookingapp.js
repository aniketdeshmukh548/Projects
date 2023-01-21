//ONLY GETTING DETAILS
/* function getDetails()
{
    var fname=document.getElementById("name").value;
    localStorage.setItem('first name',fname)
    var emailadd=document.getElementById("email").value;
    localStorage.setItem('EMAIL',emailadd)
    var phoneno=document.getElementById("phone").value;
    localStorage.setItem('Mob NO',phoneno)
    var d=document.getElementById("date").value;
    localStorage.setItem('DATE',d)
    var t=document.getElementById("time").value;
    localStorage.setItem('TIME',t)
} */

//BY OBJECT
/* function getDetails() {
    var fname = document.getElementById("name").value;
    var emailadd = document.getElementById("email").value;
    var phoneno = document.getElementById("phone").value;
    var d = document.getElementById("date").value;
    var t = document.getElementById("time").value;

    let myObj = {
        name: fname,
        email: emailadd,
        phone: phoneno,
        date: d,
        time: t,
    }
    let myObj_searlized = JSON.stringify(myObj)
    console.log(myObj_searlized)
    localStorage.setItem("userdetails", myObj_searlized)
    console.log(localStorage) 
} */

//GETTING MULTIPLE USER DATA TO STORE IN LOCAL STORAGE
/* function getDetails() {
    var fname = document.getElementById("name").value;
    var emailadd = document.getElementById("email").value;
    var phoneno = document.getElementById("phone").value;
    var d = document.getElementById("date").value;
    var t = document.getElementById("time").value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => 
        data.fname.toLowerCase() == fname.toLowerCase() && 
        data.emailadd.toLowerCase() == emailadd.toLowerCase() &&
        data.phoneno.toLowerCase() == phoneno.toLowerCase()&&
        data.d.toLowerCase() == d.toLowerCase()&&
        data.t.toLowerCase() == t.toLowerCase()
    );
    if(!exist){
        formData.push({ fname, emailadd,phoneno,d,t});
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log(localStorage)
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
} */

//by watching hint video
/* function getDetails()
{
    var fname = document.getElementById("name").value;
    var emailadd = document.getElementById("email").value;
    var phoneno = document.getElementById("phone").value;
    var d = document.getElementById("date").value;
    var t = document.getElementById("time").value;
    let myObj = {
        name: fname,
        email: emailadd,
        phone: phoneno,
        date: d,
        time: t,
    }
    let myObj_searlized = JSON.stringify(myObj)
    localStorage.setItem("userdetails", myObj_searlized)
    showonScreen(myObj_searlized)
}
function showonScreen(myObj_searlized)
{
    let parentEleme=document.getElementById("listOfitems")
    parentEleme.innerHTML= parentEleme.innerHTML+ `<li>${myObj_searlized.name}-${myObj_searlized.email}-${myObj_searlized.phone}</li>`
    //let chidelem=document.createElement('li')
    //chidelem.textContent=myObj_searlized.name+" "+myObj_searlized.name+" "+myObj_searlized.email+" "+myObj_searlized.phone+" "+myObj_searlized.d+" "+myObj_searlized.t
    //parentEleme.appendChild(chidelem)
} */

/* //adding delete functionality
function savetoLocalStorage(event)
{
    event.preventDefault();
    var fname=event.target.name.value;
    var emailadd=event.target.email.value;
    var phoneno=event.target.phone.value;
    var d=event.target.date.value;
    var t=event.target.time.value;
    const obj={
        fname,
        emailadd,phoneno,d,t
    }
    localStorage.setItem(obj.emailadd ,JSON.stringify(obj))
    showUsersonscreen(obj)

}
function showUsersonscreen(obj)
{
    let parentEleme=document.getElementById('listOfitems')
    let chidelem=document.createElement('li')
    let littlechild=document.createElement('button')
    chidelem.textContent=obj.fname+" "+obj.emailadd+" "+obj.phoneno+" "+obj.d+" "+obj.t
    littlechild.setAttribute('id','delete-btn')
    littlechild.innerText="Delete"
    parentEleme.appendChild(chidelem)
    parentEleme.appendChild(littlechild)
    littlechild.addEventListener('click' ,function(deleteevent)
    {
        if(deleteevent.target.id=='delete-btn')
        {
            chidelem.remove('li')
            littlechild.remove('buttton')
            localStorage.removeItem(obj.emailadd,JSON.stringify(obj))
        }
    })
} */

function savetoLocalStorage(event) {
    event.preventDefault();
    var fname = event.target.name.value;
    var emailadd = event.target.email.value;
    var phoneno = event.target.phone.value;
    var d = event.target.date.value;
    var t = event.target.time.value;
    const obj = {
        fname,
        emailadd, phoneno, d, t
    }
    localStorage.setItem(obj.emailadd, JSON.stringify(obj))
    showUsersonscreen(obj)

}
function showUsersonscreen(obj) {
    let parentEleme = document.getElementById('listOfitems')
    let chidelem = document.createElement('li')
    let editchild = document.createElement('button')
    let littlechild = document.createElement('button')
    chidelem.textContent = obj.fname + " " + obj.emailadd + " " + obj.phoneno + " " + obj.d + " " + obj.t
    littlechild.setAttribute('id', 'delete-btn')
    littlechild.innerText = "Delete"
    editchild.setAttribute('id', 'edit-btn')
    editchild.innerText = "Edit"
    parentEleme.appendChild(chidelem)
    parentEleme.appendChild(editchild)
    parentEleme.appendChild(littlechild)
    littlechild.addEventListener('click', function (deleteevent) {
        if (deleteevent.target.id == 'delete-btn') {
            chidelem.remove('li')
            littlechild.remove('buttton')
            editchild.remove('button')
            localStorage.removeItem(obj.emailadd, JSON.stringify(obj))
        }
    })
    editchild.addEventListener('click', function (editevent) {
        if (editevent.target.id == 'edit-btn') {
            const span=ul.firstElementChild;
            const input=document.createElement('input');
            input.type='text';
            input.value=span.textContent;
            li.insertBefore(input,span)
            li.removeChild(span)
            chidelem.remove('li')
            littlechild.remove('buttton')
            editchild.remove('button')
            localStorage.removeItem(obj.emailadd, JSON.stringify(obj))

        }
    })
}