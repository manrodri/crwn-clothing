import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { UserProvider } from "./contexts/userContext";
import { ProductsProvider} from "./contexts/productsContext";

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
            <ProductsProvider>
                 <App />
            </ProductsProvider>
        </UserProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
