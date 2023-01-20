
function getDetails()
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
}