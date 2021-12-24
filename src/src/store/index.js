import { createStore } from "vuex";
import products from './products';

export default new createStore({
    modules: {
        products
    }
})