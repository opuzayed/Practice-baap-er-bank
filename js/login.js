//step-1:Add click eent handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
//step-2 : get the email address inside the input field
//always remember .value use to get input field value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
//step-3:get password
//3.a-set id on the html element
//3.b-get the element
//3.c-get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
//check condition
    if(email == 'opu@email.com' && password == '12345')
    {
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
})
