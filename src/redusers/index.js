import {combineReducers} from "redux";

import  products from './products';
import  bucket from './bucket';
import  filterProducts from './filterProducts';

export default combineReducers({
    products,
    bucket,
    filterProducts
})