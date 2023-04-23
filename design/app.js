const submitBtn = document.querySelector('.main__col-2-submit');

const formInputs = [
  { 
    inputField: document.querySelector('#input-field-1'),
    errorField: document.querySelector('.main__col-2-input-box:nth-of-type(1) .main__col-2-error'),
    iconField: document.querySelector('.main__col-2-input-box:nth-of-type(1) .main__col-2-icon')
  },
  { 
    inputField: document.querySelector('#input-field-2'),
    errorField: document.querySelector('.main__col-2-input-box:nth-of-type(2) .main__col-2-error'),
    iconField: document.querySelector('.main__col-2-input-box:nth-of-type(2) .main__col-2-icon')
  },
  {
    inputField: document.querySelector('#input-field-3'),
    errorField: document.querySelector('.main__col-2-input-box:nth-of-type(3) .main__col-2-error'),
    iconField: document.querySelector('.main__col-2-input-box:nth-of-type(3) .main__col-2-icon')
  },
  {
    inputField: document.querySelector('#input-field-4'),
    errorField: document.querySelector('.main__col-2-input-box:nth-of-type(4) .main__col-2-error'),
    iconField: document.querySelector('.main__col-2-input-box:nth-of-type(4) .main__col-2-icon')
  }
];

function validateInputs(inputs) {
  let hasError = false;
  inputs.forEach(
    (
      { inputField, errorField, iconField }
    ) => {
    if (inputField.value === '') {
      errorField.innerHTML = `${inputField.name} cannot be empty`;
      inputField.style.border = '2px solid var(--clr-primary-red)';
      iconField.classList.toggle('active');
      hasError = true;
    } else if (inputField.type === 'email' && !inputField.validity.valid) {
      errorField.textContent = 'Please enter a valid email address';
      inputField.style.border = '2px solid var(--clr-primary-red)';
      iconField.classList.toggle('active');
      hasError = true;
    } else {
      errorField.textContent = '';
    }
  });
  return !hasError;
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (validateInputs(formInputs)) {
    event.target.form.submit();
  }
  
  formInputs.forEach(input => {
    if (input.inputField.type === 'email') {
      input.inputField.style.color = 'var(--clr-primary-red)';
    }
  });
});