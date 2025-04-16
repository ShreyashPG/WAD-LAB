const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static('public'));

// Sample data
const restaurantData = {
    name: "The Gourmet Bistro",
    description: "Fine dining experience with seasonal ingredients",
    menuItems: [
        { name: "Grilled Salmon", description: "Atlantic salmon with lemon herb butter", price: "$24.99", image: "restaurant1.jpg" },
        { name: "Mushroom Risotto", description: "Creamy Arborio rice with wild mushrooms", price: "$18.99", image: "restaurant2.jpg" },
        { name: "Chocolate Decadence", description: "Triple chocolate dessert with raspberry coulis", price: "$9.99", image: "restaurant3.jpg" }
    ]
};

const galleryData = {
    name: "Urban Canvas Gallery",
    description: "Contemporary art showcasing local talent",
    artworks: [
        { title: "Abstract Dreams", artist: "Jane Doe", medium: "Oil on canvas", price: "$1,200", image: "gallery1.jpg" },
        { title: "Urban Landscape", artist: "John Smith", medium: "Acrylic", price: "$850", image: "gallery2.jpg" },
        { title: "Digital Frontier", artist: "Alex Chen", medium: "Digital print", price: "$450", image: "gallery3.jpg" }
    ]
};

// Routes
app.get('/', (req, res) => {
    res.redirect('/restaurant');
});

app.get('/restaurant', (req, res) => {
    res.render('restaurant', restaurantData);
});

app.get('/gallery', (req, res) => {
    res.render('gallery', galleryData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});