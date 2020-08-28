import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    
    // const totalCost = cart.reduce((total, course) => total + course.price, 0)
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        const coursePrice = course.price;
             totalCost = totalCost + coursePrice 
    }
    return (
        <div>
            <table class="table table-dark table-striped table-bordered">
                <thead className = 'bg-info'>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(course => <tr>
                                <td>{course.name}</td>
                                <td>${course.price}</td>
                            </tr> )
                    }
                    <tr className = 'bg-warning'>
                        <td>Total Cost</td>
                        <td>${totalCost}</td>
                    </tr>                  
                </tbody>
            </table> 
            <button>Make Payment</button>    
        </div>
        
    );
};

export default Cart;