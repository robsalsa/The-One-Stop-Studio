 const buttons = document.querySelectorAll('.service-filter button');
        const categories = document.querySelectorAll('.service-category');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                categories.forEach(category => {
                    const cat = category.getAttribute('data-category');
                    category.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
                });
            });
        });