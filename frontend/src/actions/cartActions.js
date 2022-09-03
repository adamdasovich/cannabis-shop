import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

const api = axios.create({
	baseURL: "http://localhost:5000/api/products",
});

export const addToCart = (id, qty) => async (dispatch, getState) => {
	try {
		const { data } = await api.get(`/${id}`);
		console.log(data)

		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				product: data._id,
				name: data.name,
				image: data.image,
				price: data.price,
				countInStock: data.countInStock,
				qty,
			},
		})
		localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
	} catch (error) {
		console.log(error)
	}

}






