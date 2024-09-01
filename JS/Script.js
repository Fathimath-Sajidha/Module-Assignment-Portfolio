document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('number').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let responseMessage = '';

    
    if (name === '' && mobile === '' && email === '' && message === '') {
        responseMessage += 'fill all the fields.<br>';
        isValid = false;
    }
    if (message === '') {
        responseMessage += 'Message is required.<br>';
        isValid = false;
    }

    const responseElement = document.getElementById('response');
    if (isValid) {
        responseMessage = 'Form submitted successfully!';
       
    } else {
       
    }
    responseElement.innerHTML = responseMessage;
});

function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block'; // Show all cards
        } else if (card.getAttribute('data-category') === category) {
            card.style.display = 'block'; // Show matching cards
        } else {
            card.style.display = 'none'; // Hide non-matching cards
        }
    });
}