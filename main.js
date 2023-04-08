const form = document.getElementById('contact-form');
const contactName = [];
const number =[];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    addContact();
    addTable();
    console.log(`nome ${contactName} - Telefone ${number}`)


})

function addContact(){

    const inputName = document.getElementById('contact-name');
    const inputTel = document.getElementById('contact-number');

    if(number.includes(inputTel.value)){
        alert('Esse contato já existe.');
    }
        else if(contactName.includes(inputName.value)){
            alert('Esse contato já existe.');
        }
    else{
        let linha = '<tr>';
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    contactName.push(inputName.value);
    number.push(inputTel.value);
    }
    inputName.value = '';
    inputTel.value = ''; 
}


function addTable(){
    const bTable = document.querySelector('tbody');
    bTable.innerHTML = linhas;
}