async function addProducts(event) {
    event.preventDefault()
    let sellprice = event.target.sp.value;
    let prodname = event.target.pn.value;
    const obj = {
        sellprice,
        prodname,
    }
    // axios.post("https://crudcrud.com/api/45a5e78ac7aa43128828ebbe3364885f/Products", obj)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })
    // showProductsonScreen(obj)
    //using async wait
    try {
        let res=await axios.post("https://crudcrud.com/api/01e10e9702a14f66aa813357f6d71c11/Productsdata",obj)
        showProductsonScreen(res.data)
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}
window.addEventListener("DOMContentLoaded", async() => {
    try {
        const res=await axios.get("https://crudcrud.com/api/01e10e9702a14f66aa813357f6d71c11/Productsdata")
        for(var i = 0;i<res.data.length;i++)
    {
        showProductsonScreen(res.data[i])
    }
    console.log(res)
        
    } catch (error) {
        consol.log(error)
        
    }
    // axios.get("https://crudcrud.com/api/45a5e78ac7aa43128828ebbe3364885f/Products")
    //     .then((response) => {
    //         console.log(response);
    //         for (var i = 0; i < response.data.length; i++) {
    //             showProductsonScreen(response.data[i]);
    //         }
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })
})
function addedProducts(obj) {
    let parentEleme = document.getElementById('listOfProducts')
    let chidelem = document.createElement('li')
    let deleteElem = document.createElement('input')
    deleteElem.type = 'button';
    deleteElem.value = 'Delete';
    deleteElem.id = 'delete-btn';
    chidelem.textContent = obj.sellprice + " " + obj.prodname + " ";
    deleteElem.onclick = () => {
        parentEleme.removeChild(chidelem)
        chidelem.remove(deleteElem)
        deleteprod(obj)
    }
    parentEleme.append(chidelem)
    chidelem.append(deleteElem)
}
let total=0;
function totalofProducts(obj) {
    let b = document.getElementById('add')
    total=total+parseInt(obj.sellprice)
    b.textContent = total;
}
async function deleteprod(obj) {
    try {
        const res= axios.delete(`https://crudcrud.com/api/01e10e9702a14f66aa813357f6d71c11/Productsdata/${obj._id}`)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    // axios.delete(`https://crudcrud.com/api/45a5e78ac7aa43128828ebbe3364885f/Products/${obj._id}`)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })
}
function showProductsonScreen(obj) {
    addedProducts(obj)
    totalofProducts(obj)
    localStorage.setItem(obj.sellprice, JSON.stringify(obj))
}