const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const emailValidationMessage = document.getElementById('validation-message');

form.addEventListener('submit', function(event){
    event.preventDefault(); 
    const email = emailInput.value;
    if(email.trim() === ''){
        emailValidationMessage.innerHTML = 'Please enter an email address.';
        emailValidationMessage.style.color = 'hsl(0, 100%, 63%)';
        emailValidationMessage.style.display = 'block';
    }else if(validateEmail(email)){
        emailValidationMessage.innerHTML = 'Email is valid! Sign Up successful.';
        emailValidationMessage.style.color = 'hsl(120, 70%, 50%)';
        emailValidationMessage.style.display = 'block';
    }else{
        emailValidationMessage.innerHTML = 'Please enter a valid email address.';
        emailValidationMessage.style.color = 'hsl(0, 100%, 63%)';
        emailValidationMessage.style.display = 'block';
    }
});

emailInput.addEventListener('input', function(){
    emailValidationMessage.style.display = 'none';
});

function validateEmail(email){
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

