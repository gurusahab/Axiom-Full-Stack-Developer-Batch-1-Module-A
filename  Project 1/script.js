// Retrieving HTML element form DOC
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Function to update class and show an error
function showError(input, message){
    
    //Getting the parent element of the input field
    const formControl = input.parentElement;
    //Replace the class and add an error
    formControl.className = 'form-control error';
    //Getting the small element for error message
    const small = formControl.querySelector('small')
    //Replace the text of small element by using the 'Parameterized' iput message
    small.innerText = message
}

//Function to update the class for success
function showSuccess(input){
    //Getting the parent element of the input field
    const formControl = input.parentElement;
    //Replace the class and add an sucess
    formControl.className = 'form-control sucess';
}
//Function to check valid email
function isValidEmail(email)
{   
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());  
}
//Events listner
//Creat event listener for submit button
form.addEventListener('submit',function(e){
    // Stop page from reloading on submit 
    e.preventDefault();

    //Check to see if field meet required field requriment
    //Check if username is empty
    if(username.value === '')
    {
        showError(username, 'Username is required');
    }
    else{
     
        showSuccess(username)
    }
    //Check if email is empty
    if(email.value === '')
    {
        showError(email, 'email is required');
    }
    else if(!isValidEmail(email.value))
    {
          showError(email, "Email is invalid")
    }
    else{
       
        showSuccess(email)
    }
    //Check if password is empty
    if(password.value === '')
    {
        showError(password, 'Password is required');
    }
    else{
        
        showSuccess(password)
    }
    //Check if password2 is empty
    if(password2.value === '')
    {
        showError(password2, 'Password2 is required');
    }
    else{
       
        showSuccess(password2)
    }
    
});