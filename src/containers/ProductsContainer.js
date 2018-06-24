import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/ProductList/ProductList';
import ProductItem from './../components/ProductItem/ProductItem';
import callAPI from './../utils/apiCaller';
import { actFetchProductsRequest } from './../actions/index';

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
            callAPI(`products/${id}`, 'DELETE', null).then(resp => {
                var { products } = this.props;
                if(resp.status === 200){
                    var index = this.findIndex(products, id);
                    if(index !== -1) {
                        products.splice(index, 1);
                        this.setState({
                            products : products
                        });
                        //alert('Bạn đã xóa sản phẩm thành công!');
                    }
                }
            });
        }
    }

    findIndex = (products, id) => {
        let result = -1;
        products.forEach((product, index) => {
            if(product.id === id)
                result = index;
        });
        return result;
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);