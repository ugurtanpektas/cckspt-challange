import React from "react";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {productAction} from './../actions/productAction';
import {filterAction} from './../actions/filterAction';

import '../assets/scss/filter.scss';
import categoryIcon from '../assets/img/category-icon.svg';

class Filter extends React.Component{

    componentDidMount(){
        
    }

    setFilter = (filterId) => {
        this.props.filterAction('SET_ACTIVE_FILTER', filterId);
        this.props.productAction('LOADING');
        if(filterId === 0){
            this.props.productAction('SET_FILTERED_PRODUCTS', this.props.productState.dummyProducts);
            this.props.productAction('SET_LISTING_PRODUCTS', this.props.productState.dummyProducts);
        }
        else{
            let filteredProducts = this.props.productState.dummyProducts;
            filteredProducts = filteredProducts.filter((product) => product.category === filterId);
            // console.log('filteredProducts : ', filteredProducts);
            this.props.productAction('SET_FILTERED_PRODUCTS', filteredProducts);
            this.props.productAction('SET_LISTING_PRODUCTS', filteredProducts);
        }
    }

    toggleMobileFilter = () => {
        this.props.filterAction('TOGGLE_MOBILE_FILTER');
    }

    render(){
       return (
           <div className="container filter-container">
               <div className="row">
                    <div className="col-12">
                        <h2 onClick={this.toggleMobileFilter}><img src={categoryIcon} alt="Kategoriler" /> Kategoriler <span className={`filter-mobile-toggle ${this.props.filterState.mobileToggle ? "opened" : ""}`}></span></h2>
                    </div>
                </div>
                <div className={`row filter-items ${this.props.filterState.mobileToggle ? "opened" : ""}`}>
                    <div className="col-lg-2">
                        <a href="/#" onClick={() => this.setFilter(0)} className={`filter-item ${this.props.filterState.activeFilter === 0 ? "active" : ""}`}>Tüm Kategoriler</a>
                    </div>

                    {this.props.filterState.dummyFilters.map((filter) => {
                        return(
                        <div className="col-lg-2" key={filter.id}>
                            <a href="/#" onClick={() => this.setFilter(filter.id)} className={`filter-item ${this.props.filterState.activeFilter === filter.id ? "active" : ""}`}>{filter.name}</a>
                        </div>
                        )
                    })}
                </div>
           </div>
        )
    }
}

function mapStateToProps(state){
    return{
        productState: state.products,
        filterState: state.filter
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        filterAction : filterAction,
        productAction : productAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Filter);