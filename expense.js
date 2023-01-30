function getDetails(event)
{
    event.preventDefault();
    var choseexp = event.target.num.value;
    var chosedesc = event.target.descp.value;
    var chosectgry = event.target.cat.value;
    const obj = {
        choseexp,
        chosedesc,
        chosectgry,
    }
    localStorage.setItem(obj.choseexp, JSON.stringify(obj))
    showUsersonscreen(obj)
    console.log(localStorage)
}
function showUsersonscreen(obj)
{
    let parentEleme=document.getElementById('listOfitems')
    let chidelem=document.createElement('li')
    let editchild = document.createElement('button')
    let deletechild = document.createElement('button')
    chidelem.textContent=obj.choseexp+" "+obj.chosedesc+" "+obj.chosectgry+""
    console.log(chidelem.textContent)
    parentEleme.appendChild(chidelem)
    deletechild.setAttribute('id', 'delete-btn')
    deletechild.innerText = "Delete Expense"
    editchild.setAttribute('id', 'edit-btn')
    editchild.innerText = "Edit Expense"
    parentEleme.appendChild(editchild)
    parentEleme.appendChild(deletechild)
    deletechild.addEventListener('click', function (deleteevent) {
        if (deleteevent.target.id == 'delete-btn') {
            chidelem.remove('li')
            deletechild.remove('buttton')
            editchild.remove('button')
        }
    })
    editchild.addEventListener('click', function (editevent) {
        if (editevent.target.id == 'edit-btn') {
            document.getElementById('num').value = obj.choseexp;
            document.getElementById('descp').value = obj.chosedesc;
            document.getElementById('cat').value = obj.chosectgry;
            localStorage.removeItem(obj.choseexp);
            parentEleme.removeChild(chidelem) 
        }
    })
    
    
}