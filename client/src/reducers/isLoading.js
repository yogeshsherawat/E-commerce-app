
const intialState = true;

function isLoading(state = intialState, action) {
    switch (action.type) {
        case 'CHK_LOADING':
            return action.payload;
        default:
            return state;
    }
}

export default isLoading;
