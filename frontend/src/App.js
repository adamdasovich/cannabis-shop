import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';


const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Routes>
						<Route exact path='/' element={<HomeScreen />} />
						<Route exact path='/product/:id' element={<ProductScreen />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;