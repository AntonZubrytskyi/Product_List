import React, { lazy, Suspense } from "react";
import Navbar from './components/Navbar/Navbar';
import {
  Route,
  Routes,
} from "react-router-dom";

const App = () => {

  const ProductsList = lazy(() => import('./components/ProductsList/ProductsList'))
  const CarDetails = lazy(() => import('./components/CarDetails/CarDetails'))

  return (
    <div className="App">
     <Navbar/> 
      <Suspense fallback={<h2 className="loader">"Loading..."</h2>}>
        <Routes>
          <Route exact path='/' element={<ProductsList />}  />
          <Route exact path='/details/:id' element={<CarDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
