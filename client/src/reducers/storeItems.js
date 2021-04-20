
const intialState = null;

function storeItems(state = intialState, action) {
    switch (action.type) {
        case 'ADD_ITEMS':
            return action.payload;
        default:
            return state;
    }
}

export default storeItems;
