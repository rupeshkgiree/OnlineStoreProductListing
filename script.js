let products = [];

async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(productsToDisplay) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p class="rating">Rating: ${product.rating.toFixed(1)}</p>
        `;
        productGrid.appendChild(productCard);
    });
}

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }

    sortProducts(filteredProducts);
}
    

function sortProducts(productsToSort) {
    const sortBy = document.getElementById('sort-select').value;

    switch (sortBy) {
        case 'price-low-high':
            productsToSort.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-low':
            productsToSort.sort((a, b) => b.price - a.price);
            break;
        case 'rating-low-high':
            productsToSort.sort((a, b) => a.rating - b.rating);
            break;
        
            case 'rating-high-low':
            productsToSort.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Default sorting (e.g., by name or id if available)
            break;
    }

    displayProducts(productsToSort);
}

document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('sort-select').addEventListener('change', () => sortProducts(products));

document.addEventListener('DOMContentLoaded', fetchProducts);