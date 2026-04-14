import { useEffect } from 'react'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET } from '../constants/orderConstants'

function OrderScreen() {
    const navigate = useNavigate()
    const { id: orderId } = useParams()
    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const itemsPrice = !loading && !error && order
        ? order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
        : 0

    useEffect(() => {
    if (!userInfo) {
        navigate('/login');
        return;
    }

    if (successPay || !order || order._id !== orderId) {
        dispatch({ type: ORDER_PAY_RESET });
        dispatch(getOrderDetails(orderId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [dispatch, navigate, orderId, successPay, userInfo])

    const createOrderHandler = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: order.totalPrice,
                    },
                },
            ],
        })
    }

    const successPaymentHandler = (data, actions) => {
        return actions.order.capture().then((details) => {
            dispatch(payOrder(orderId, details))
        })
    }

    if (loading) return <Loader />
    if (error) return <Message variant='danger'>{error}</Message>

    return (
        <PayPalScriptProvider 
            options={{
                clientId: "AZhybHLplgX7KJC5jW9-hRnnSjxWBE9Axu8M2VdygHF1Y5jGcI9M_Dowlg--Fd0ERprgcAUk4mwvlu6l",
                currency: "USD"
            }}
        >
            <div>
                <h1>Order: {order._id}</h1>
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <p><strong>Name: </strong>{order.user.name}</p>
                                <p><strong>Email: </strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                                <p>
                                    {order.shippingAddress.address}, {order.shippingAddress.city}
                                    {'  '}{order.shippingAddress.postalCode},{'  '}{order.shippingAddress.country}
                                </p>
                                {order.isDelivered ? (
                                    <Message variant='success'>Delivered on {order.deliveredAt}</Message>
                                ) : (
                                    <Message variant='danger'>Not Delivered</Message>
                                )}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p><strong>Method: </strong>{order.paymentMethod}</p>
                                {order.isPaid ? (
                                    <Message variant='success'>Paid on {order.paidAt}</Message>
                                ) : (
                                    <Message variant='danger'>Not Paid</Message>
                                )}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {order.orderItems.length === 0 ? (
                                    <Message variant='info'>Order is empty</Message>
                                ) : (
                                    <ListGroup variant='flush'>
                                        {order.orderItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={item.image} alt={item.name} fluid rounded />
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item><h2>Order Summary</h2></ListGroup.Item>
                                <ListGroup.Item><Row><Col>Items:</Col><Col>${itemsPrice}</Col></Row></ListGroup.Item>
                                <ListGroup.Item><Row><Col>Shipping:</Col><Col>${order.shippingPrice}</Col></Row></ListGroup.Item>
                                <ListGroup.Item><Row><Col>Tax:</Col><Col>${order.taxPrice}</Col></Row></ListGroup.Item>
                                <ListGroup.Item><Row><Col>Total:</Col><Col>${order.totalPrice}</Col></Row></ListGroup.Item>

                                {!order.isPaid && (
                                    <ListGroup.Item>
                                        {loadingPay && <Loader />}
                                        <PayPalButtons
                                            createOrder={createOrderHandler}
                                            onApprove={successPaymentHandler}
                                        />
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        </PayPalScriptProvider>
    )
}

export default OrderScreen