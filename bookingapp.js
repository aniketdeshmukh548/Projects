
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

function getDetails() {
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
}
