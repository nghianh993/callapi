import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/ProductList/ProductList';
import ProductItem from './../components/ProductItem/ProductItem';
import callAPI from './../utils/apiCaller';

class ProductsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }

    componentWillMount() {
        callAPI('products', 'GET', null).then(resp => {
            this.setState ({
                products : resp.data
            });
        });
    }

    render() {
        var { products } = this.state;
        return (
            <ProductList>
                {this.showProducts(products)}
            </ProductList>
        );
    }

    onDeleteProduct = (id) => {
        if(confirm('Bạn có chắc muốn xóa sản phẩm này không?')){ //eslint-disable-line
            callAPI(`products/${id}`, 'DELETE', null).then(resp => {
                var { products } = this.state;
                if(resp.status === 200){
                    var index = this.findIndex(products, id);
                    if(index !== -1) {
                        products.splice(index, 1);
                        this.setState({
                            products : products
                        });
                        alert('Bạn đã xóa sản phẩm thành công!');
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
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return (
                    <ProductItem 
                        key={index} 
                        index={ index }
                        product={ product }
                        onDelete={this.onDeleteProduct}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products : state.products 
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);