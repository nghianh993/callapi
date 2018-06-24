import * as Types from './../constants/ActionTypes';

var inititalState = [];

const products = (state = inititalState, action) => {
    switch(action.type){
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        default : return [...state];
    }
}

export default products;