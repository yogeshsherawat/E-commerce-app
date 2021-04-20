import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ marginTop: "10px", marginBottom: "10px" }}>
            
            <h1 className="text-center">
                <Link to="/" style={{color:"black"}}>Fake Store</Link>
                 <Link to = '/cart'>
            <button style={{margin:"10px" , backgroundColor:"grey", color:"black"}} className="btn btn-primary float-right">View Cart</button>
                </Link>
            </h1>
        </header>
    );
}
export default Header;