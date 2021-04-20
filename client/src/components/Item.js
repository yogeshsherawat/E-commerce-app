import React, { useEffect,useState } from 'react';
import axios from 'axios';
import getItem from '../actions/getItem';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import cartItem from '../actions/cartItem';
import Header from './Header';
function Item(props) {
    let match = props.match;
    const storeItem = useSelector(state => state.storeItem);
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [alert, setAlert] = useState(false);
    useEffect(
        async function () {
            let res = await axios.get(match.url);
            let data = res.data;
            dispatch(getItem(data));
        }, []);
    
    function Increase() {
        setCount(count => count + 1);
    }
    function Decrese() {
        if(count>1)
        setCount(count => count - 1);
    }
    function handleClick() {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        },2000)
        let data = { storeItem, count };
        dispatch(cartItem(data));
    }
    return (
        <div >
            <Header/>
        <div className="container">
                {storeItem == null ? <Loading /> :
                    <div>
                        {alert == true && <div className="alert alert-danger">
                            Item Added to Cart
</div>}
                    <div className="row" style={{ marginTop: "30px" }}>
       
                <div className="col-sm-12 col-md-6">
                    <img src={storeItem.image} className="img-fluid" style={{ maxHeight:"500px" }}/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <h2 style={{ marginBottom: "15px" }}>{storeItem.title}</h2>
                    <h2><small>price:</small> <span style={{ color: 'red' }}>${storeItem.price} </span></h2>
                    <div className="cart-btns-div">
                        <button className="btn cart-btn"
                        onClick = {handleClick}
                        >Add To Cart</button>
                        <button className="btn cart-btn" style={{ marginLeft: "15px", marginRight: "15px" }}
                            onClick={Increase}
                        >+</button>
                        <span style={{color:"blue"}}>{count} </span>
                        <button className="btn cart-btn" style={{ marginLeft: "15px", marginRight: "15px" }}
                        onClick={Decrese}
                        >-</button>
                        </div>
                    <h6 style={{ marginTop: "30px" , color:"lightblue" }}>
                        {storeItem.description}
                    </h6>

                </div>

                        </div>
                    </div>
                    
        }
        
        

        </div>

    </div>);
}

export default Item;