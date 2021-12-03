import React from 'react';

import { Route,Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const RouteConfig = () => {
    return (
        <Routes>
            <Route 
                path="/"
                element={ <Home /> }
            />
            <Route 
                path="/:category"
                element={ <Catalog /> }
            />
            <Route 
                path="/:category/:id"
                element={ <Detail /> }
            />
            <Route 
                path="/:category/search/:keyword"
                element={ <Catalog /> }
            />
        </Routes>
    )
}

export default RouteConfig
