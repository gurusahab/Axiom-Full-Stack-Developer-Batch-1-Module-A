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
function checkEmail(input)
{   
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim()))
    {
        showSuccess(input)
    }
    else
    {   
        showError(input, 'Please provide a valid email')
        //showError(input,`${getFieldId(input)} is not valid`)
    }
    //return re.test(String(email).toLowerCase());  
}
//Fuction to check if requred field has data
function checkRequried(inputArray)
{
   inputArray.forEach(function(input){
       if(input.value === '')
       {
           //showError(input, input.id + 'is requried')
           showError(input,`${getFieldId(input)} is requried`)

       }
       else
       {
           showSuccess(input)
       }
   })
}

//Fuction to check the lenght of requried field
function checkLength(input, min, max){
   if(input.value.length < min)
   {
      showError(input, `${getFieldId(input)} should be at least ${min} characters `)
   }
   else if(input.value.length > max)
   {
    showError(input, `${getFieldId(input)} should be less than ${max} characters `)
   }
   else{
       showSuccess(input)
   }
}

//Function to check to Id of required field with proper case
function getFieldId(input)
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Function to check password and confirmed password is same 
function checkPasswordMatch(input1, input2)
{
    if(input1.value === input2.value)
    {
        showSuccess(input2);
    }
    else{
        showError(input2, 'Passwords does not match')
    }
}


//Events listner
//Creat event listener for submit button
form.addEventListener('submit',function(e){
    // Stop page from reloading on submit 
    e.preventDefault();
  
    checkRequried([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30)
    checkEmail(email)
    checkPasswordMatch(password, password2);
     
});