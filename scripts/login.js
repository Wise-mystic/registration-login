// this selecting event from id 
const loginForm = document.querySelector('#login-form');
// this to submit the event
loginForm.addEventListener('submit', function(event){
    
    event.preventDefault();
// collecting data
    const verData = new FormData(event.target);
    console.log(
        verData.get('username or email'),
        verData.get('password')
    );
    // display success information
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account logedin successfully!'
});