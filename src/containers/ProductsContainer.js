import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/ProductList/ProductList';
import ProductItem from './../components/ProductItem/ProductItem';
import { actFetchProductsRequest, actDeleteProductsRequest } from './../actions/index';

class ProductsContainer extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        var { products } = this.props;
        return (
            <ProductList>
                {this.showProducts(products)}
            </ProductList>
        );
    }

    onDeleteProduct = (id) => {
        if(confirm('Bạn có chắc muốn xóa sản phẩm này không?')){ //eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }

    showProducts = (products) => {
        if(products.length > 0){
            let result = products.map((product, index) => {
                return (
                    <ProductItem 
                        key={index} 
                        index={ index }
                        product={ product }
                        onDelete={this.onDeleteProduct}
                    />
                );
            });
            return result;
        }
        return <tr><td colSpan='6'>Chưa có dữ liệu</td></tr>;
    }
}

const mapStateToProps = state => {
    return {
        products : state.products 
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);