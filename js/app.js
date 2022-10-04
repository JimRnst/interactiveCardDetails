const form = document.querySelector('.card_data');
const cardName = document.querySelector(' #name');
const cardNumber = document.querySelector('#number');
const cardMm = document.querySelector('#month');
const cardYear = document.querySelector('#year');
const cardCvc = document.querySelector('#cvv');

form.dataNumber.addEventListener('keyup', (e) =>{
    let inputValor = e.target.value;
    form.dataNumber.value = inputValor.replace(/\s/g, '').replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
    cardNumber.textContent = inputValor;
});

form.dataName.addEventListener('keyup',(e) =>{
    let inputValorName = e.target.value;
    // form.dataName.value = inputValorName.replace(/\d/g, ''); //delete numbers in inputs
    cardName.textContent = inputValorName;
});

form.dataExpirationM.addEventListener('keyup', (e) =>{
    let inputValorMonth = e.target.value;
    cardMm.textContent = inputValorMonth;
});

form.dataExpirationY.addEventListener('keyup', (e) =>{
    let inputValorYear = e.target.value;
    cardYear.textContent = inputValorYear;
});

form.dataCvc.addEventListener('keyup', (e) =>{
    let inputValorCvc = e.target.value;
    cardCvc.textContent = inputValorCvc;
});




