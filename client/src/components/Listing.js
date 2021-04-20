import React, { Fragment, useEffect ,useState } from 'react';
import getData from '../utils/fetchData';
import Loading from './Loading';
import { setLoadingFalse } from '../actions/setLoading';
import addStoreItems from '../actions/addStoreItems';
import Header from './Header';

import { useSelector, useDispatch } from 'react-redux';

const Listing = () => {
    const isLoading = useSelector(state => state.isLoading);
    const storeItems = useSelector(state => state.storeItems);
    const dispatch = useDispatch();
    
    useEffect(async () => {

        let x = await getData();
        dispatch(setLoadingFalse());
        dispatch(addStoreItems(x));
        
    }, []);



    return (
        <div>
            <Header/>
            { isLoading == false ? storeItems : <Loading  />
            }
        </div>
        
    );

};
export default Listing;