const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating');

let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        currentRating = rating;
        updateRating();
    });

    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        highlightStars(rating);
    });

    star.addEventListener('mouseout', () => {
        highlightStars(currentRating);
    });
});

function highlightStars(highlight) {
    stars.forEach((star, index) => {
        if (index < highlight) {
            star.style.color = 'gold';
        } else {
            star.style.color = 'gray';
        }
    });
}

function updateRating() {
    ratingDisplay.textContent = currentRating;
    highlightStars(currentRating);
}
