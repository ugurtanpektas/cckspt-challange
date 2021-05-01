import React from "react";

import '../assets/scss/breadcrumb.scss';

class Breadcrumb extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
           <div className="container">
                <div className="row breadcrumb-container">
                    <div className="col-12">
                        <a href="#">Çiçeksepeti</a> 
                        <span className="arrow"></span>
                        <a href="#">Market</a>
                        <span className="arrow"></span>
                        <span className="active-breadcrumb">ÇiçeksepetiBreadcrumb</span>
                        
                    </div>
                </div>
           </div> 
        )
    }
}

export default Breadcrumb;