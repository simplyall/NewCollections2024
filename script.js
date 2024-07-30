document.getElementById('search-button').addEventListener('click', function() {
    searchCards();
});

document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchCards();
    }
});

function searchCards() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    let found = false;

    cards.forEach(card => {
        const label = card.querySelector('.label').textContent.toLowerCase();
        if (label.includes(searchTerm)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    const noResults = document.getElementById('no-results');
    if (found) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
}
