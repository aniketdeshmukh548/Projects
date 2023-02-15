async function getDetails(event) {
    event.preventDefault();
    var choseexp = event.target.num.value;
    var chosedesc = event.target.descp.value;
    var chosectgry = event.target.cat.value;
    const obj = {
        choseexp,
        chosedesc,
        chosectgry,
    }
    try {
        const res=axios.post("https://crudcrud.com/api/5baadf59a1534f55b6a6605366f9af68/expenseData", obj)
        showUsersonscreen(res.data)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    localStorage.setItem(obj.choseexp, JSON.stringify(obj))
    showUsersonscreen(obj)
    console.log(localStorage)
}
function showUsersonscreen(obj) {
    let parentEleme = document.getElementById('listOfitems')
    let chidelem = document.createElement('li')
    chidelem.textContent = obj.choseexp + " " + obj.chosedesc + " " + obj.chosectgry;
    let deleteButton = document.createElement('input')
    deleteButton.type = 'button';
    deleteButton.value = 'Delete Expense';
    deleteButton.id = 'delete-btn';
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.choseexp)
        parentEleme.removeChild(chidelem)
        // axios.delete(`https://crudcrud.com/api/5baadf59a1534f55b6a6605366f9af68/expenseData/${obj._id}`)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     })
        removeUsers()
    }
    let editButton = document.createElement('input')
    editButton.type = 'button';
    editButton.value = 'Edit Expense';
    editButton.id = 'edit-btn';
    editButton.onclick = () => {
        localStorage.removeItem(obj.choseexp)
        parentEleme.removeChild(chidelem)
        document.getElementById('num').value = obj.choseexp;
        document.getElementById('descp').value = obj.chosedesc;
        document.getElementById('cat').value = obj.chosectgry;
    }
    parentEleme.appendChild(chidelem)
    chidelem.appendChild(deleteButton)
    chidelem.appendChild(editButton)
}
async function removeUsers(){
    try {
        const res=await axios.delete(`https://crudcrud.com/api/5baadf59a1534f55b6a6605366f9af68/expenseData/${obj._id}`)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
        // axios.delete(`https://crudcrud.com/api/5baadf59a1534f55b6a6605366f9af68/expenseData/${obj._id}`)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     })
}