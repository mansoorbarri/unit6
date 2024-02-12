document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const bikeCards = document.querySelectorAll('.bike-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.dataset.filter;

            // Remove the 'selected-option' class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('selected-option');
            });

            // Add the 'selected-option' class to the clicked button
            this.classList.add('selected-option');

            // Filter the bike cards based on the selected filter
            bikeCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else if (card.dataset.filter.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});