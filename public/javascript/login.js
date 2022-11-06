async function signupFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#signup-user').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if(username && email && password) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: { 'Content-Type': 'application/json' }
        });
        if(response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-from').addEventListener('submit', signupFormHandler)

async function loginFromHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('##username-login').value.trim();
    const password = document.querySelector('#password-entry').value.trim();

    if(username && password) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'content-Type': 'application/json'}
        });
        if(response.ok) {
            document.location.replace('login-part');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login').addEventListener('submit', signupFormHandler)