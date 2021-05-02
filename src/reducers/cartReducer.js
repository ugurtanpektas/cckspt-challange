const initialState = {
    cartItems:[],
    totalPrice:0,
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
        default:
            return state;
    }
}