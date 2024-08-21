import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: '1',
            name: 'Wooden Table',
            price: '150',
            image: 'https://example.com/images/wooden-table.jpg'
        },
        {
            id: '2',
            name: 'Glass Coffee Table',
            price: '200',
            image: 'https://example.com/images/glass-coffee-table.jpg'
        },
        {
            id: '3',
            name: 'Marble Dining Table',
            price: '300',
            image: 'https://example.com/images/marble-dining-table.jpg'
        },
        {
            id: '4',
            name: 'Metal Side Table',
            price: '120',
            image: 'https://example.com/images/metal-side-table.jpg'
        },
        {
            id: '5',
            name: 'Oak Writing Table',
            price: '250',
            image: 'https://example.com/images/oak-writing-desk.jpg'
        },
        {
            id: '6',
            name: 'Modern End Table',
            price: '100',
            image: 'https://example.com/images/modern-end-table.jpg'
        },
        {
            id: '7',
            name: 'Rustic Farmhouse Table',
            price: '220',
            image: 'https://example.com/images/rustic-farmhouse-table.jpg'
        },
        {
            id: '8',
            name: 'Vintage Coffee Table',
            price: '180',
            image: 'https://example.com/images/vintage-coffee-table.jpg'
        }
    ];

    // http://localhost:3000/api/products?search=metal
    if (req.query.search) {
        const filterProducts = products.filter(product =>
            product.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000); // Simulates a delay of 3 seconds
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
