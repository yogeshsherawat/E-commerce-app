
const intialState = [];

function Cart(state = intialState, action) {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            return [...state,action.payload];
        default:
            return state;
    }
}

export default Cart;
