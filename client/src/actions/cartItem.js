
function cartItem(data) {
    return ({
        type: 'ADD_CART_ITEM',
        payload : data
    });
    
}
export default cartItem;