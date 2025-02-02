import React , {Fragment } from 'react'
import "./ConfirmOrder.css";
import {useSelector } from "react-redux";
import CheckOutSteps from "../Cart/CheckOutSteps.js"
import MetaData from "../layout/MetaData"
import {Link} from "react-router-dom"
import { Typography } from '@mui/material';



const ConfirmOrder = ({history}) => {

    const { shippingInfo , cartItems } = useSelector((state) => state.cart);
    const {user} = useSelector((state) => state.user);

    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price ,
      0
    ) ;

      const shippingCharges = subtotal > 1000 ? 0 : 100 ;

      const tax = Math.floor(subtotal * 0.12) ;

      const totalPrice = subtotal + shippingCharges + tax ;

      const address = `${shippingInfo.address} , ${shippingInfo.city} , ${shippingInfo.state} , ${shippingInfo.pinCode} , ${shippingInfo.country}` ;

      const proceedToPayment = () => {
        const data = {
          subtotal,
          shippingCharges,
          tax,
          totalPrice,
        };

        sessionStorage.setItem("orderInfo" , JSON.stringify(data) );

        history.push("/process/payment");

      }

  return (
    <Fragment>
        <MetaData title="Shopie. || Confirm Order" />
        <CheckOutSteps activeStep={1} />
        <div className='confirmOrderPage'>
        {/* Section 1  */}
          <div>
            <div className='confirmShippingArea'>
              <Typography style={{color:"crimson"}} >Shipping Information</Typography>
              <div className='confirmShippingAreaBox'>
              <div>
                <p>Name :</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone :</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address :</p>
                <span>{address}</span>
              </div>
              </div>
            </div>

            <div className='confirmCartItems'>
              <Typography >Your Cart Items :</Typography>
              <div className='confirmCartItemContainer'>
                {cartItems && 
                cartItems.map((item)=>(
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    <span>
                      {item.quantity} x ₹{item.price}={" "}
                      <b>₹{item.quantity*item.price}</b>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Section 2  */}
          <div>
            <div className='orderSummery'>
              <Typography style={{color:"crimson"}} >Order Summery</Typography>
              <div>
                <div>
                  <p>Subtotal :</p>
                  <span>₹{subtotal}</span>
                </div>
                <div>
                  <p>Shipping Charges :</p>
                  <span>₹{shippingCharges}</span>
                </div>
                <div>
                  <p>GST :</p>
                  <span>₹{tax}</span>
                </div>
              </div>

              <div className='orderSummeryTotal'>
                <p>
                  <b>Total :</b>
                </p>
                <span>₹{totalPrice}</span>
              </div>

              <button onClick={proceedToPayment} >Proceed to Pay</button>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default ConfirmOrder
