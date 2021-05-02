import React from "react";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {productAction} from './../actions/productAction';
import {cartAction} from './../actions/cartAction';

import logo from '../assets/img/logo.svg';
import cartIcon from '../assets/img/cart-icon.svg';
import lightingIcon from '../assets/img/lighting-icon.svg';

import '../assets/scss/navigation.scss';

class Navigation extends React.Component{

    componentDidMount(){
        
    }

    handleSearch = (e) =>{
        if(e.target.value.length >= 3){
            let listedProducts = this.props.productState.listingProducts;
            listedProducts = listedProducts.filter((product) =>  product.name.indexOf(e.target.value, 0) !== -1);
            this.props.productAction('LOADING');
            setTimeout(()=>{
                // Timeout added for fake loading
                this.props.productAction('SET_LISTING_PRODUCTS', listedProducts);
            },500)
        }
        else{
            let listedProducts = this.props.productState.filteredProducts;
            this.props.productAction('LOADING');
            setTimeout(()=>{
                // Timeout added for fake loading
                this.props.productAction('SET_LISTING_PRODUCTS', listedProducts);
            },500)
        }
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
                                <input type="text" className="search-input" onChange={this.handleSearch} placeholder="Ürün Ara" />
                                <button className="search-button">Ara</button>
                            </div>
                            <div className="cart-container">
                                <button className="cart-button"><img src={cartIcon} alt="Sepet" title="Sepetim"/> Sepetim</button>
                                <div className={`cart-count-badge ${this.props.cartState.cartItemsCount > 0 ? "show" : ""}`}>{this.props.cartState.cartItemsCount}</div>
                                <div className={`free-cargo-popover ${this.props.cartState.showFreeCargo ? "show" : ""}`}>
                                    {this.props.cartState.totalPrice < 500 ? 
                                        <div>
                                            <img src={lightingIcon} alt="lighting" /> <span className="yellow-text">{(500 - this.props.cartState.totalPrice).toFixed(2)} TL</span> ürün daha ekleyin kargo bedava
                                            <div className="proggress-container">
                                                <div className="proggress" style={{width:((this.props.cartState.totalPrice / 500) * 100)+'%'}}></div>
                                            </div>
                                        </div>
                                    :
                                        <div>Kargo Bedava</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>  
        )
    }
}

function mapStateToProps(state){
    return{
        productState: state.products,
        cartState: state.cart
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        productAction : productAction,
        cartAction : cartAction,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Navigation);