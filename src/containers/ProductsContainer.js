import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/ProductList/ProductList';
import ProductItem from './../components/ProductItem/ProductItem';
import axios from 'axios';

class ProductsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://5b2fb24adb0f5e001465b606.mockapi.io/api/products',
            data: null
        }).then(resp => {
            this.setState({
                products : resp.data
            })
        }).catch(error => {
            
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

    showProducts = (products) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return (
                    <ProductItem 
                        key={index} 
                        index={ index }
                        product={ product }
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