var inititalState = [
    {
        id: 1,
        code: 'SP0001',
        name: 'Iphone X',
        price: 400,
        status : true
    }
];

const products = (state = inititalState, action) => {
    switch(action.types){
        default : return [...state];
    }
}

export default products;