import React from "react";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {productAction} from './../actions/productAction';
import {cartAction} from './../actions/cartAction';

import '../assets/scss/products.scss';

import productsHeaderIcon from '../assets/img/products-header-icon.svg';

class Products extends React.Component{

    componentDidMount(){
         this.setListingProducts();
    }

    setListingProducts = async () => {
            this.props.productAction('LOADING');
            this.props.productAction('SET_LISTING_PRODUCTS', this.props.productState.dummyProducts);
            this.props.productAction('SET_FILTERED_PRODUCTS', this.props.productState.dummyProducts);
    }

    addToCart = (product) => {
        let cartItems = this.props.cartState.cartItems;

        let checkProductExist = cartItems.some((item) => item.id === product.id);
        if(checkProductExist){
            this.increaseProductCount(product);
        }
        else{
            product.count = 1;
            // console.log('PRODUCT : ', product);
            this.props.cartAction('ADD_CART_ITEM', [product]);
            this.props.cartAction('SHOW_FREE_CARGO', true);
            this.props.cartAction('UPDATE_CART_COUNT');
            this.updateTotalPrice(product);
        }

        this.hideFreeCargo();
        
    }

    increaseProductCount = (product) => {
        this.props.cartAction('SHOW_FREE_CARGO', true);
        let cartItems = this.props.cartState.cartItems;
        cartItems.map((item) => {
            if(item.id === product.id){
                item.count++;
            }
            return false;
        });
        this.updateTotalPrice(product);
        this.props.cartAction('UPDATE_CART_ITEMS', cartItems);
        this.props.cartAction('UPDATE_CART_COUNT');
        this.hideFreeCargo();
    }

    decreaseProductCount = (product) => {
        let cartItems = this.props.cartState.cartItems;
        cartItems.map((item) => {
            if(item.id === product.id){
                if(item.count - 1 >= 1){
                    item.count--;
                }
                else{
                    cartItems = cartItems.filter((item) => item.id !== product.id);
                }
            }
            return false;
        });
        this.updateTotalPrice(product, 'minus');
        this.props.cartAction('UPDATE_CART_ITEMS', cartItems);
        this.props.cartAction('UPDATE_CART_COUNT');
    }

    updateTotalPrice = (product, updateType = 'plus') => {
        let totalPrice = this.props.cartState.totalPrice;
        if(updateType === 'plus'){
            totalPrice = totalPrice + product.price;
        }
        else if(updateType === 'minus'){
            totalPrice = totalPrice - product.price;
        }
        this.props.cartAction('UPDATE_TOTAL_PRICE', totalPrice);
    }

    hideFreeCargo = () => {
        setTimeout(() => {
            this.props.cartAction('SHOW_FREE_CARGO', false);
        },2000);
    }

    render(){
        let html;
        if(this.props.productState.loading){
            html = (
                <div className="container products-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="loading"> Y??kleniyor...</div>
                        </div>
                    </div>
                </div>  
            )
        }else{
            html = (
            <div className="container products-container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2><img src={productsHeaderIcon} alt="??r??nler" /> T??m Kategoriler</h2>
                    </div>
                </div>
                    <div className="row row-5th">
                    {this.props.productState.listingProducts.map((product) => {
                        return(
                            <div className="col-5th" key={product.id}>
                                <div className="product">
                                    <div className="product-top">
                                        <img src={require(`../assets/img/${product.image}`).default} alt={product.name} />
                                        <div className="product-name">
                                            {product.name} 
                                        </div>
                                    </div>
                                    <div className="product-bottom">
                                        {product.isFreeCargo && 
                                            <div className="free-cargo">??cretsiz Teslimat</div>
                                        }
                                        <div className="price">{product.price.toFixed(2)} TL</div>
                                        <div className="add-to-cart">
                                        {this.props.cartState.cartItems.some((item) => item.id === product.id) ?
                                            <div className="product-count">
                                                <button onClick={() => {this.decreaseProductCount(product)}}>-</button>
                                                <div>{this.props.cartState.cartItems.find((item) => item.id === product.id).count}</div>
                                                <button onClick={() => {this.increaseProductCount(product)}}>+</button>
                                            </div>
                                            :
                                            <button onClick={() => {this.addToCart(product)}}>Sepete Ekle</button>
                                        }    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
            </div>
            )
        }
        return(
            <div>{html}</div>
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
        cartAction : cartAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Products);