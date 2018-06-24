import * as Types from './../constants/ActionTypes';
import callAPI from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callAPI('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}

export const actDeleteProductsRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'DELETE', null).then(resp => {
            dispatch(actDeleteProducts(id));
        });
    }
}


export const actAddProductsRequest = (product) => {
    return dispatch => {
        return callAPI(`products`, 'POST', product).then(resp => {
            dispatch(actAddProducts(product));
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCT,
        products
    }
}

export const actDeleteProducts = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProducts = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}
