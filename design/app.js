// Get submit element
const submit = document.querySelector('.main__col-2-submit');

// Get input fields
const firstNameInput = document.querySelector('#input-field-1');
const lastNameInput = document.querySelector('#input-field-2');
const emailInput = document.querySelector('#input-field-3');
const passwordInput = document.querySelector('#input-field-4');

// Get error elements
const firstNameError = document.querySelector('.main__col-2-input-box:nth-of-type(1) .main__col-2-error');
const lastNameError = document.querySelector('.main__col-2-input-box:nth-of-type(2) .main__col-2-error');
const emailError = document.querySelector('.main__col-2-input-box:nth-of-type(3) .main__col-2-error');
const passwordError = document.querySelector('.main__col-2-input-box:nth-of-type(4) .main__col-2-error');


// Add submit event listener to submit
submit.addEventListener('click', (event) => {
  // Validate first name
  if (firstNameInput.value === '') {
    firstNameError.innerHTML = 'First name is cannot be empty';
    firstNameInput.style.border = '2px solid var(--clr-primary-red)'
    
    event.preventDefault();
  } else {
    firstNameError.innerHTML = '';
  }

  // Validate last name
  if (lastNameInput.value === '') {
    lastNameError.innerHTML = 'First name is cannot be empty';
    lastNameInput.style.border = '2px solid var(--clr-primary-red)'
    

    event.preventDefault();
  } else {
    lastNameError.innerHTML = '';
  }

  // Validate email
  if (emailInput.value === '') {
    emailError.innerHTML = "Email is cannot be empty";
    emailInput.style.border = '2px solid var(--clr-primary-red)'
  } else if (!emailInput.validity.valid) {
    emailError.innerHTML = 'Please enter a valid email address';
    emailInput.style.border = '2px solid var(--clr-primary-red)'
    event.preventDefault();
  } else {
    emailError.innerHTML = '';
  }

  // Validate password
  if (passwordInput.value === '') {
    passwordError.innerHTML = 'Password is cannot be empty';
    passwordInput.style.border = '2px solid var(--clr-primary-red)'
    event.preventDefault();
    
  } else {
    passwordError.innerHTML = '';
  }
});
