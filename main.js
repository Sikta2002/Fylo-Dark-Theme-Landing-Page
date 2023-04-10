// The form element and relevant input and message elements
const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const emailValidationMessage = document.getElementById('validation-message');

// Event listener to the form for when it's submitted 
form.addEventListener('submit', function(event){
    event.preventDefault(); //Prevents the default form submission behaviour

    // Value of the email input field
    const email = emailInput.value;

    // Checking if the email field is empty
    if(email.trim() === ''){
        // Displaying error message in the validation message element
        emailValidationMessage.innerHTML = 'Please enter an email address.';
        emailValidationMessage.style.color = 'hsl(0, 100%, 63%)';
        emailValidationMessage.style.display = 'block';
    }
    
    // Checking if the email field is not empty and is valid
    else if(validateEmail(email)){
        // Displaying success message in the validation message element
        emailValidationMessage.innerHTML = 'Email is valid! Sign Up successful.';
        emailValidationMessage.style.color = 'hsl(120, 70%, 50%)';
        emailValidationMessage.style.display = 'block';
    }

    // Checking if the email field is not empty but is invalid
    else{
        // Displaying error message in the validation message element
        emailValidationMessage.innerHTML = 'Please enter a valid email address.';
        emailValidationMessage.style.color = 'hsl(0, 100%, 63%)';
        emailValidationMessage.style.display = 'block';
    }
});

// Event listener for when the user types in the email input field
emailInput.addEventListener('input', function(){
    emailValidationMessage.style.display = 'none';
});

// Fuction to validate email using a regular expression
function validateEmail(email){
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

