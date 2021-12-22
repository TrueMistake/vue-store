import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home";
import Catalog from "../views/Catalog/Catalog";
import Man from "../views/Catalog/CatalogMan";
import Woman from "../views/Catalog/CatalogWoman";
import CatalogDetail from "../views/Catalog/CatalogDetail";
import Contacts from "../views/Contacts";
import About from "../views/About";
import Basket from "../views/Basket";
import Order from "../views/Order";
import Favorites from "../views/Favorites";
import PageNotFound from "../views/404";


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
        path: '/man',
        name: 'Man',
        component: Man,
        props: true
    },
    {
        path: '/woman',
        name: 'Woman',
        component: Woman,
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
    {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites,
        props: true
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    },
    {
        path: '/404',
        component: PageNotFound,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;