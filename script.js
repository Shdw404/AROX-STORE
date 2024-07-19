document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }

    nextButton.addEventListener('click', nextItem);
    prevButton.addEventListener('click', prevItem);

    showItem(currentIndex);

    const searchButton = document.getElementById('search-btn');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', function () {
        const query = searchBar.value.trim().toLowerCase();
        if (query) {
            const products = document.querySelectorAll('.product');
            let found = false;
            products.forEach(product => {
                const keywords = product.getAttribute('data-keywords').toLowerCase();
                if (keywords.includes(query)) {
                    window.location.href = product.getAttribute('onclick').match(/'([^']+)'/)[1];
                    found = true;
                }
            });
            if (!found) {
                alert('Produit non trouvé');
            }
        }
    });

    searchBar.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
