import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home";
import Catalog from "../views/Catalog/Catalog";
import CatalogDetail from "../views/Catalog/CatalogDetail";
import Contacts from "../views/Contacts";
import About from "../views/About";
import Basket from "../views/Basket";
import Order from "../views/Order";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog,
        props: true
    },
    {
        path: '/catalog/:id',
        name: 'Detail',
        component: CatalogDetail,
        props: true
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/basket',
        name: 'Basket',
        component: Basket
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;