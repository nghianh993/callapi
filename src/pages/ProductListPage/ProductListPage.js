import React, { Component } from 'react';
import ProductsContainer from './../../containers/ProductsContainer';

class ProductListPage extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                        
                <div className="row mb-10">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-info">Thêm sản phẩm</button>
                    </div>
                </div>
                <ProductsContainer />
            </div>
        );
    }
}

export default ProductListPage;