import axios from 'axios'
import {
	PRODUCTS_LIST_FAIL,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_REQUEST
} from "../constants/productConstants";

const api = axios.create({
	baseURL: "http://localhost:5000",
});


export const listProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST });

		const { data } = await api.get('/api/products');

		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: PRODUCTS_LIST_FAIL,
			payload: error.response
				&& error.response.data.message
				? error.response.data.message
				: error.message,
		})
	}
}
