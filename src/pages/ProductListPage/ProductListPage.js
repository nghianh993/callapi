import React, { Component } from 'react';
import ProductsContainer from './../../containers/ProductsContainer';
import {Link} from 'react-router-dom';

class ProductListPage extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                        
                <div className="row mb-10">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/product/add" className="btn btn-info">Thêm sản phẩm</Link>
                    </div>
                </div>
                <ProductsContainer />
            </div>
        );
    }
}

export default ProductListPage;