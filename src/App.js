import React from 'react';
import Header from './pages/Header/index';
import Churrascos from './pages/BbqList/index';
import CriarChurrasco from './pages/CreateBbq/index';
import BbqDetails from './pages/BbqDetails/index';
import NotFound from './pages/NotFound/index';

import {Provider} from 'react-redux';

import store from './store';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (           
        <BrowserRouter>
                <Header />
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<Churrascos />} />
                        <Route path="criarChurrasco" element={<CriarChurrasco />} />
                        <Route path="detalhe/:id" element={<BbqDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Provider>
        </BrowserRouter>
    ); 
}

export default App;