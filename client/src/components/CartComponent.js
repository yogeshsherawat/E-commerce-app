import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import CartList from './CartList';

const CartComponent = () => {
    const Cart = useSelector(state => state.Cart);
    return (<Fragment>
        <Header />
        {Cart.map(function (ele, index) {
            return (
                <CartList key={index} title={ele.storeItem.title} price={ele.storeItem.price} id={ele.storeItem._id}
                    image={ele.storeItem.image} category={ele.storeItem.category} count={ele.count}
                />
            )
        })}
    </Fragment>);
}
export default CartComponent;