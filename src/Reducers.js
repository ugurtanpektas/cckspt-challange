import {combineReducers} from 'redux';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import filterReducer from './reducers/filterReducer';

const Reducers = combineReducers({
    products:productReducer,
    cart:cartReducer,
    filter:filterReducer
})

export default Reducers;