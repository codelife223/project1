document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Thank you for contacting us!';
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill out all fields.';
    }
});
