import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const AppContent = () => {
    return (
        <>
            <Routes>
                {Layout.map((route, index) => {
                    return (
                        !!route.component && (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.component />}
                            />
                        )
                    );
                })}
            </Routes>
        </>
    );
};

export default AppContent;