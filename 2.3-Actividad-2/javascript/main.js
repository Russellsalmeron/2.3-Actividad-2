
function mostrar(){
    // swal('Bienvenido al mundo WEB');
    document.getElementById("abrirventana").style.display="block";

    
}
function cerrar(){
    document.getElementById("abrirventana").style.display="none";
}

function showForm(){
    document.getElementById("formulario").style.display="block";
    document.getElementById("table").style.display="block";
    document.getElementById("btsaludo").style.display="none";
    document.getElementById("abrirventana").style.display="none";

}
function inicio(){
    // swal('Bienvenido al mundo WEB');
    document.getElementById("btsaludo").style.display="block";
    document.getElementById("formulario").style.display="none";
    document.getElementById("table").style.display="none";
    }

function toggleMenu() {
    let sidebar = document.querySelector(".sidebar");
    const isExpanded = sidebar?.classList.contains("d-block");

    if(isExpanded) {
        sidebar.classList.remove("d-block");
    } else {
        sidebar.classList.add("d-block");
    }
}

var items = [];

function getItemsHtml(items) {
    return items.map((item, index) => `<tr>
        <td class="item">${item.firstName}</td>
        <td class="item">${item.lastName}</td>
        <td class="item">${item.email}</td>
        <td class="item"><button class="btn-remove" onclick="removeItem(${index})">X</button></td>
    </tr>`).join('');
}

function renderItems(items) {
    const itemList = document.querySelector("#item-list");
    itemList.innerHTML = getItemsHtml(items);
}

function removeItem(index) {
    items = items.filter((_, i) => i !== index);

    renderItems(items);
}

function addItem() {
    const form = document.querySelector("#formulario");
    const firstName = form.querySelector("#nombre");
    const lastName = form.querySelector("#apellido");
    const email = form.querySelector("#correo");

    if(!firstName || !lastName || !email) {
        return;
    }

    items.push({firstName: firstName.value, lastName: lastName.value, email: email.value});
    [firstName, lastName, email].forEach((el) => el.value = "");
    
    renderItems(items);
}