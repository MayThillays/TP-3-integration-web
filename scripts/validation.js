
const form = document.getElementById('form');
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('sucess');
}

const setSucess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('sucess');
    inputControl.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    let noError = true; 
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();


    if (firstnameValue === ''){
        setError(firstName, 'le prénom est requis');
        noError = false;
    } else{
        setSucess(firstName);
    }


    if (lastnameValue === ''){
        setError(lastName, 'le nom est requis');
        noError = false;
    } else{
        setSucess(lastName);
    }

    
    if (emailValue === ''){
        setError(email, 'le courriel est requis');
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Veuillez fournir une adresse courriel valide"); 
        noError = false;
    } else {
        setSucess(email);
    }


    if (phoneValue === ''){
        setError(phoneNumber, 'un numéro est requis');
        noError = false;
    } else{
        setSucess(phoneNumber);
    }

    console.log(noError)
    return noError; 
    console.log(noError)
}