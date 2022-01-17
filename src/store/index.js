import { createStore } from "vuex";
import products from './products';
import posts from './posts';

export default new createStore({
    modules: {
        products,
        posts
    }
})