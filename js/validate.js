const inputs = document.querySelectorAll(".card_data input");
// console.log(inputs);
const btnReload = document.querySelector("#thankscontent #btn-continue");


const expretions = {
    name: /^[a-zA-Z\s]{2,20}$/,
    number: /^[0-9\s]{1,19}$/,
    monthYear: /^[0-9]{2}$/,
    cvc: /^[0-9]{3}$/
}

// inputsValidate

const formValidate = (e) =>  {
    // test console.log(e.target.name);
    switch (e.target.name) {
        case "dataName":
            if(expretions.name.test(e.target.value)){
                document.querySelector("#card_dataBox").classList.remove("card_dataBox-error");
                setOk("card_dataBox");
            } else {
                // let prueba1 = document.querySelector(".inputError");
                // console.log(prueba1)
                document.querySelector("#card_dataBox").classList.add("card_dataBox-error");
                setOk("card_dataBox");
            }
        break;
        case "dataNumber":
            if (expretions.number.test(e.target.value)){
                document.querySelector("#card_dataNumber").classList.remove("card_dataBox-error");
                setOk("card_dataNumber");
            } else {
                document.querySelector("#card_dataNumber").classList.add("card_dataBox-error");
                setOk("card_dataNumber");
            }
            
        break;
        case "dataExpirationM":
            if(expretions.monthYear.test(e.target.value)){
                document.querySelector("#dataExpirationM").classList.remove("error"); 
                document.querySelector("#input_exp").classList.remove("card_dataBox-error");
                setOk("dataExpirationM");
            } else {
                document.querySelector("#dataExpirationM").classList.add("error");
                document.querySelector("#input_exp").classList.add("card_dataBox-error");
                setOk("input_exp");
                setOk("dataExpirationM");
            }
        break;
        case "dataExpirationY":
            if(expretions.monthYear.test(e.target.value)){
                document.querySelector("#input_exp").classList.remove("card_dataBox-error");
                document.querySelector("#dataExpirationY").classList.remove("error");
                setOk("input_exp");
                setOk("dataExpirationY");
            } else {
                document.querySelector("#dataExpirationY").classList.add("error");
                document.querySelector("#input_exp").classList.add("card_dataBox-error");
                setOk("input_exp");
                setOk("dataExpirationY");
            }
        break;
        case "dataCvc":
            if(expretions.cvc.test(e.target.value)){
                document.querySelector("#input_cvc").classList.remove("card_dataBox-error");
                setOk("input_cvc");
            } else {
                document.querySelector("#input_cvc").classList.add("card_dataBox-error");
                setOk("input_cvc");
            }
        break;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', formValidate);
});

function setError(inputs) {
    document.querySelector(`#${inputs}`).classList.add("ok");
    document.querySelector(`#${inputs}`).classList.remove("card_dataBox-error");
}

function setOk (inputs) {
    document.querySelector(`#${inputs}`).classList.remove("ok");
}

function btnConfirm () {
    document.querySelector("#thankscontent").classList.add("ok");
    document.querySelector("#main").classList.add("ok");
}

function check() {
    const nameValue = dataName.value.trim();
    const numberValue = dataNumber.value.trim();
    const monthValue = dataExpirationM.value.trim();
    const yearValue = dataExpirationY.value.trim();
    const cvcValue = dataCvc.value.trim();
    
    if (nameValue === "") {
        setError("card_dataBox");
        
    } else {
        setOk("card_dataBox");
    };

    if (numberValue === "") {
        setError("card_dataNumber");
    } else {
        setOk("card_dataNumber");
    };

    if (monthValue === "") {
        setError("dataExpirationM");
        setError("input_exp");
    } else {
        setOk("dataExpirationM");
    }

    if (yearValue === "") {
        setError("dataExpirationY");
        setError("input_exp");
    } else {
        setOk("dataExpirationY");
    }

    if (cvcValue === "") {
        setError("input_cvc");
    } else {
        setOk("input_cvc");
    }

    if (nameValue && numberValue && monthValue && yearValue && cvcValue) {
        btnConfirm();
    }   
}


function btnContinue() {
    btnReload.addEventListener("click", () => {
        window.location.reload();
    }
)}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    check();

    btnContinue();
});
