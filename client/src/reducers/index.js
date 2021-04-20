import isLoading from './isLoading';
import storeItems from './storeItems';
import storeItem from './storeItem';
import Cart from './Cart';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLoading,
    storeItems,
    storeItem,
    Cart
})

export default allReducers;


