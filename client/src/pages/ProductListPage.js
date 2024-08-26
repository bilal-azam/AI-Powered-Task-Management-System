import React, { useState, useEffect } from 'react';
import ProductSearch from '../components/ProductSearch';
import axios from 'axios';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products', { params: { search: searchQuery } });
            setProducts(response.data);
        };
        fetchProducts();
    }, [searchQuery]);

    return (
        <div>
            <ProductSearch onSearch={setSearchQuery} />
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListPage;