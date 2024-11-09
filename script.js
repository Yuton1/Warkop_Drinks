// Search functionality
document.querySelector('.search-bar').addEventListener('input', function (e) {
    const searchValue = e.target.value.toLowerCase();
    const drinkCards = document.querySelectorAll('.drink-card');

    drinkCards.forEach(card => {
        const drinkName = card.querySelector('h2').textContent.toLowerCase();
        if (drinkName.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Hover effect for drink cards
document.querySelectorAll('.drink-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
