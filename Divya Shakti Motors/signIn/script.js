document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get the email input value
    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value;
  
    //  validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Check if email is valid
    if (!emailRegex.test(emailValue)) {
      alert('Please enter a valid email address');
      return;
    }
    
    console.log('Email is valid, proceeding with sign-up...');
    

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get the password and confirm password
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm-password');
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;
    {
    // Check if passwords are same or not
    if (passwordValue !== confirmPasswordValue) {
      alert('Passwords do not match. Please try again.'); //if passwords are not same
      return;
    }
  
    // If passwords match, proceed with sign-up logic
    console.log('Passwords match, proceeding with sign-up...');
}
 
    const usernameInput = documnet.querySelector('#username');
    const usernameValue = usernameInput.value;
    {
    if(usernameValue = ''){
        alert('Please enter a username');// if username box is empty
    }
    }
  });
  });


