var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required.";
        return false;
    }
    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name.";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone-number is required.";
        return false;
    }
    else if(phone.length!=10){
        phoneError.innerHTML = "Phone number should be of 10 digits.";
        return false;
    }
    else if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits please.";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required.";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[/.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid Email.";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30; // 30 characters are required.
    var left = required - message.length;

    if(left>0)
    {
        messageError.innerHTML = left + ' more characters required.';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateForm(){
    if(!validateEmail() || !validateForm() || !validateMessage() || !validateName() || !validatePhone()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";

        // After 5 seconds, the error message is hidden.
        setTimeout(function(){
            submitError.style.display = "none";
        },5000)
        return false;
    }
}
