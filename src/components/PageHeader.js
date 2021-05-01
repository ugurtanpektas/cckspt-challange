import React from "react";

import '../assets/scss/pageHeader.scss';

class PageHeader extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
                
        <div className="page-header-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Çiçeksepeti H1</h1>
                    </div>
                </div>
            </div>
        </div>
                        
        )
    }
}

export default PageHeader;