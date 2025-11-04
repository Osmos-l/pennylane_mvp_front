import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './index.css'
import Layout from './Layout';
import { StoreProvider } from '@hooks/useMst.jsx';
import { setupStore } from '@stores/setupStore.js';

function Main() {
  const [store] = useState(setupStore());

  useEffect(() => {
    store.recipesStore.preloadRecommendations();
    // TODO: preload ingredients
  }, []);

  if (!store || store.recipesStore.loading) {
    return;
  } 

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <Main />
);
