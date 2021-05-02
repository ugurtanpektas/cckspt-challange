const initialState = {
    cartItems:[],
    totalPrice:0,
    cartItemsCount:0,
    showFreeCargo:false,
    loading:true
};

export default function cartReducer(state = initialState, action){
    switch(action.type){
        case 'LOADING':
            return {...state, loading:true};
        case 'ADD_CART_ITEM':
            return {...state, loading:false, cartItems:state.cartItems.concat(action.payload)};
        case 'UPDATE_CART_ITEMS':
            return {...state, loading:false, cartItems:action.payload};
        case 'UPDATE_TOTAL_PRICE':
            return {...state, loading:false, totalPrice:action.payload};
        case 'UPDATE_CART_COUNT':
            return {...state, loading:false, cartItemsCount:state.cartItems.reduce((a, b) => +a + +b.count, 0)};
        case 'SHOW_FREE_CARGO':
            return {...state, loading:false, showFreeCargo:action.payload};
        default:
            return state;
    }
}