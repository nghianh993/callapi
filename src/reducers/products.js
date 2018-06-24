import * as Types from './../constants/ActionTypes';

var inititalState = [];

const products = (state = inititalState, action) => {
    switch(action.types){
        case Types.FETCH_PRODUCT:
            console.log(1);
            state = action.products;
            return [...state];
        default : return [...state];
    }
}

export default products;