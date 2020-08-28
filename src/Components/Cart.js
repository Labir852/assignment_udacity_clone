import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total+course.price;
    }

   


    return (
        <div id="order">
        
            <h4>Order Summary</h4>
            <p>Course Enrolled: {cart.length}</p>
            <p>Course Price: {total}</p>
            <button>Back</button>
        </div>
    );
};

export default Cart;