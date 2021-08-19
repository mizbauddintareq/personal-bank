document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    if (userEmail == 'abc@def.com' && userPass == 'Abcd'){
        window.location.href = ('banking.html')
    }; 
});

