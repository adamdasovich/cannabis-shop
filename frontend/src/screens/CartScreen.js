import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'


const CartScreen = () => {
	const { id } = useParams()
	const [searchParams] = useSearchParams()
	const qty = Number(searchParams.get('qty'))
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart
	console.log(cartItems)

	useEffect(() => {
		if (id) {
			dispatch(addToCart(id, qty))
		}
	}, [dispatch, id, qty])

	navigate('/')

	return (
		<div>
			<h1>Cart Screen</h1>
		</div>
	)
}

export default CartScreen