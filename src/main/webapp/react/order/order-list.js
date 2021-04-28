import ordersService from "./orders-service"
const {useState, useEffect} =React;
const {Link} = window.ReactRouterDOM;

const OrderList =() => {
    const [orders, setOrders]=useState([])
    useEffect(()=>{
        findAllOrders()
    },[])
    const findAllOrders = () => {
        ordersService.findAllOrders().then((data) => {
            setOrders(data)
        })
    }

    return (
        <div>
            <h1>Order List</h1>
            <br />
            Click the ID to view and edit order information:
            <br />
            <table>
                <tr>
                    <th>ID</th><th>Transaction Number</th><th>User Id</th><th>Product Id</th>
                    <th>Quantity</th><th>Sale Price</th>
                </tr>

                {
                    orders.map((order) => {
                        return (<tr>
                                <td>
                                    <Link to={`/orders/${order.id}`}>
                                        {order.id}
                                    </Link>
                                </td>
                                <td>{order.transactionnumber}</td><td>{order.userid}</td>
                                <td>{order.productid}</td><td>{order.quantity}</td>
                                <td>{order.saleprice}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <br /><br />
            &nbsp;&nbsp;&nbsp;<Link to="/">Back to Home Page</Link>&nbsp;&nbsp;&nbsp; <Link to="/orders/new">Add New Order</Link>
        </div>

    )
}

export default OrderList;