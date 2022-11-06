async function signupFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && email && password) {
        const response = await fetch('/views/layouts/login.handlebars', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: { 'signup-form': './views/layouts/login.handlebars' }
        });
        if(response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
};

async function loginFromHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('##username-signup').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/views/layouts/login.handlebars', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'login-from': './views/layouts/login.handlebars'}
        });
        if(response.ok) {
            document.location.replace('signup-form');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login').addEventListener()