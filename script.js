function showDetails(title, imgSrc, price) {
    alert(`Title: ${title}\nPrice: ${price}`);
}

function searchListings() {
    const query = document.getElementById('search').value.toLowerCase();
    const listings = document.querySelectorAll('.listing');

    listings.forEach(listing => {
        const title = listing.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            listing.style.display = 'block';
        } else {
            listing.style.display = 'none';
        }
    });
}

// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
