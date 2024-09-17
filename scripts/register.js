// select form by Id
const registerForm = document.querySelector('#register-form');  // an id is tageted and then selected ...target the id in the html//
console.log(registerForm);
// Handle form submit event
registerForm.addEventListener('submit', function () {
    // collect username
    // collect email
    // collect password
    // save user information
    // send confirmation email
}); //when you submit what will happen ..a function should be invoke to get the work done, knowing what you need to//

// age variable 
const age = 44;

// square of age
function squareOfAge(age,) {
    const squaredAge = age **2;
    return squaredAge;
} // this is how functions are defined.  every function must return something, they are handlers and must show proof of what was done calling  for the use of return. fuctions can be defined and be invoke.


const squaredAge = squareOfAge(45);
console.log(squaredAge);