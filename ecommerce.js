function addProducts(event) {
    event.preventDefault()
    let sellprice = event.target.sp.value;
    let prodname = event.target.pn.value;
    const obj = {
        sellprice,
        prodname,
    }
    axios.post("https://crudcrud.com/api/26ba5ecd59ab4008b5a22ffa5e4041ae/Products", obj)
        .then((response) => {
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        })
    showProductsonScreen(obj)
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/26ba5ecd59ab4008b5a22ffa5e4041ae/Products")
        .then((response) => {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                showProductsonScreen(response.data[i]);
            }
        })
        .catch((e) => {
            console.log(e);
        })
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
function totalofProducts(obj) {
    let b = document.getElementById('add')
    let arr = [];
    arr.push(obj.sellprice)
    console.log(arr)
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    b.textContent = sum;
}
function deleteprod(obj) {
    axios.delete(`https://crudcrud.com/api/26ba5ecd59ab4008b5a22ffa5e4041ae/Products/${obj._id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        })
}
function showProductsonScreen(obj) {
    addedProducts(obj)
    totalofProducts(obj)
}