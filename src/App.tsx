import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductsList from './component/productList';
import { Route, Routes } from 'react-router-dom';
import ProductAdd from './component/productAdd';
import ProductEdit from './component/productEdit';
function App() {
return (
    <div className="App">
       <Routes>
       <Route path="/" element={<ProductsList />} />
                <Route path="/add" element={<ProductAdd />} />
                <Route path="/edit/:id" element={<ProductEdit />} />
       </Routes>
    </div>
);
}

export default App
