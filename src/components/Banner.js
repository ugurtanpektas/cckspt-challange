import React from "react";

import '../assets/scss/banner.scss';

import bannerOne from '../assets/img/banner-1.png';
import bannerTwo from '../assets/img/banner-2.png';
import bannerThree from '../assets/img/banner-3.png';

class Banner extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
           <div className="banner-container">
               <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="banner-item red">
                                <div className="banner-image">
                                    <img src={bannerOne} alt="Banner One" />
                                </div>
                                <div className="banner-content">
                                    <div>75 TL Üzerine Teslimat Ücreti Bizden</div>
                                    <div>
                                        <a href="" className="detail-button">Detaylı Bilgi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="banner-item blue">
                                <div className="banner-image">
                                    <img src={bannerTwo} alt="Banner Two" />
                                </div>
                                <div className="banner-content">
                                    <div>Hediye Kategorisi için Sepette %15 İndirim</div>
                                    <div>
                                        <a href="" className="detail-button">Hediye Ürünleri</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="banner-item green">
                                <div className="banner-image">
                                    <img src={bannerThree} alt="Banner Three" />
                                </div>
                                <div className="banner-content">
                                    <div>Kırtasiye Kategorisi için Sepette %15 İndirim</div>
                                    <div>
                                        <a href="" className="detail-button">Detaylı Bilgi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
            
        )
    }
}

export default Banner;