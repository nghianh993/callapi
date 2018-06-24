import React from 'react';
import Home from './pages/HomePage/Home';
import NotFound from './pages/NotFoundPage/NotFound';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const router = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/product-list",
        exact: true,
        main: () => <ProductListPage />
    },
    {
        path: "/product/add",
        exact: true,
        main: () => <ProductActionPage />
    },
    {
        path: "/product/:id/edit",
        exact: true,
        main: ({match}) => <ProductActionPage match={match} />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    }
];

export default router;