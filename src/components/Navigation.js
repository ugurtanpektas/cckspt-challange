import React from "react";

import logo from '../assets/img/logo.svg';
import cartIcon from '../assets/img/cart-icon.svg';
import lightingIcon from '../assets/img/lighting-icon.svg';
import searchIcon from '../assets/img/search-icon.svg';

import '../assets/scss/navigation.scss';

class Navigation extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
           <div className="container">
                <div className="row navigation-container">
                    <div className="col-lg-3 col-md-4 col-sm-12 sm-text-center logo-container">
                        <img src={logo} alt="Çiçeksepeti" title="Çiçeksepeti" />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="nav-right-container">
                            <div className="search-container">
                                <input type="text" className="search-input" placeholder="Ürün Ara" />
                                <button className="search-button">Ara</button>
                            </div>
                            <div className="cart-container">
                                <button className="cart-button"><img src={cartIcon} alt="Sepet" title="Sepetim"/> Sepetim</button>
                            </div>
                        </div>
                    </div>
                </div>
           </div>  
        )
    }
}

export default Navigation;