import * as Types from './../constants/ActionTypes';

var inititalState = [];

const products = (state = inititalState, action) => {
    switch(action.type){
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            let index = -1;
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_PRODUCT :
            state.push(action.product);
            return [...state];
        default : return [...state];
    }
}

var findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if(product.id === id)
            result = index;
    });
    return result;
}

export default products;