document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const searchInput = document.getElementById('search');
    const sortSelect = document.getElementById('sort');
    
    let products = [];
    
    // Fetch products from API
    async function fetchProducts() {
      try {
        loadingElement.style.display = 'block';
        errorElement.style.display = 'none';
        
        const response = await fetch('http://localhost:3000/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        products = await response.json();
        displayProducts(products);
      } catch (error) {
        errorElement.textContent = 'Error loading products. Please try again later.';
        errorElement.style.display = 'block';
        console.error('Error:', error);
      } finally {
        loadingElement.style.display = 'none';
      }
    }
    
    // Display products in the DOM
    function displayProducts(productsToDisplay) {
      productsContainer.innerHTML = '';
      
      if (productsToDisplay.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No products found.</p>';
        return;
      }
      
      productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-description">${product.description}</p>
          </div>
        `;
        
        productsContainer.appendChild(productCard);
      });
    }
    
    // Filter products based on search input
    function filterProducts() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
      );
      displayProducts(filteredProducts);
    }
    
    // Sort products based on selected option
    function sortProducts() {
      const sortValue = sortSelect.value;
      let sortedProducts = [...products];
      
      switch (sortValue) {
        case 'price-asc':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          // Default sorting (original order)
          break;
      }
      
      displayProducts(sortedProducts);
    }
    
    // Event listeners
    searchInput.addEventListener('input', filterProducts);
    sortSelect.addEventListener('change', sortProducts);
    
    // Initial load
    fetchProducts();
  });