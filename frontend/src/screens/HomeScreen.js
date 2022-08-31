import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios';

const api = axios.create({
	baseURL: "http://localhost:5000",
});


const HomeScreen = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await api.get('/api/products');
			const { products } = data;
			console.log(products);
			setProducts(products);
		}
		fetchProducts();
	}, []);
	console.log(Array.isArray(products));

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col key={product._id} sm={12} md={6} lg={4}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomeScreen