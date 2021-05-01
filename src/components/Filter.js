import React from "react";
import '../assets/scss/filter.scss';
import categoryIcon from '../assets/img/category-icon.svg';

class Filter extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
           <div className="container filter-container">
               <div className="row">
                    <div className="col-12">
                        <h2><img src={categoryIcon} alt="Kategoriler" /> Kategoriler</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <a href="#" className="filter-item active">Tüm Kategoriler</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Elektronik</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Ev ve Yaşam</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Evcil Hayvan</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Kitap</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Oyuncak</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Spor</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Çiçek (120)</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Hediye</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Moda, Aksesuar</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Ofis, Kırtasiye</a>
                    </div>
                    <div className="col-lg-2">
                        <a href="#" className="filter-item">Parfüm</a>
                    </div>
                </div>
           </div>
        )
    }
}

export default Filter;