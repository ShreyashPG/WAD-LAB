const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Read products from JSON file
function getProducts() {
  const data = fs.readFileSync(path.join(__dirname, 'products.json'));
  return JSON.parse(data);
}

// API endpoint to get all products
app.get('/api/products', (req, res) => {
  try {
    const products = getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load products' });
  }
});

// API endpoint to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  try {
    const products = getProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load product' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});