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
function getDetails() {
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
}
