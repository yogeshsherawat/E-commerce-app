import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import getItem from '../actions/getItem';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartList(props) {

    let { title, image, id, category, price } = props;
    let url = "/items/" + id;
    let itemCount = props.count;
    console.log(itemCount);
    return (
        <div className="container mt-5 mb-5 card-outer-div" >
            <div className='row'>
                <div className='col-sm-5 col-lg-4 text-center'  >
                    <Link to={url}>
                        <img className='img-fluid' style={{ maxHeight: '250px' }} src={image} />
                    </Link>
                </div>
                <div className='col-sm-7 col-lg-8'>

                    <small style={{ color: "orange" }}>{category}</small>
                    <Link to={url}>
                        <h3 style={{ color: "black" }}  >{title} </h3>
                    </Link>

                    <h4 style={{ color: 'red' }}>${price}</h4>
                    {price > 50 && <h6>Free Delievery By Fake Store</h6> // if item is above 50 then delivery is free 
                    }
                    <h6>
                        <span style={{ fontSize: "60px", marginTop: "20px", color:"red" }}>&#10008;{itemCount}</span>
                    </h6>
                </div>
            </div>

        </div>

    );
}




export default CartList;