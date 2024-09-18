// select form by Id
const registerForm = document.querySelector('#register-form');  // an id is tageted and then selected ...target the id in the html//
// console.log(registerForm); removed 
// Handle form submit event
registerForm.addEventListener('submit', function (event) {
    // console.log(event.target); removed 
    event.preventDefault();
    // Collect form data 
    const formData = new FormData(event.target);
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    // save user information
    // send confirmation email
    // Display feedback or success message
    const messageH1  = document.querySelector('#message');
    messageH1.textContent ='Account registered successfully!'
}); //when you submit what will happen ..a function should be invoke to get the work done, knowing what you need to//

// age variable 
const age = 44;

// square of age
function squareOfAge(age,) {
    const squaredAge = age ** 2;
    return squaredAge;
} // this is how functions are defined.  every function must return something, they are handlers and must show proof of what was done calling  for the use of return. fuctions can be defined and be invoke.


const squaredAge = squareOfAge(45);
// console.log(squaredAge);


// function to get full name 
function fullName(firstName, lastName) {
    // const fullName = firstName + lastName;
    return `${firstName} ${lastName}`
    return fullName;
}

const myFullName = fullName('Wisdom', 'Kwawuvi');
// console.log(myFullName);

