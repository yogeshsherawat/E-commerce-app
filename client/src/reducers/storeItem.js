
const intialState = null;

function storeItem(state = intialState, action) {
    switch (action.type) {
        case 'GET_ITEM':
            return action.payload;
        default:
            return state;
    }
}

export default storeItem;
