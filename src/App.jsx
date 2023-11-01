import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './Components/HomePage';
import Shop from './Components/Shop';
import ShoppingCart from './Components/ShoppingCart';
import CoffeeBeansDetails from './Components/CoffeeBeansDetails';
import { useState } from 'react';

import './index.css';

function App() {
  const [SpecificCoffee, setSpecificCoffee] = useState([]);
  const RemoveArray = [];

  const CoffeeAdd = (newCoffee) => {
    setSpecificCoffee((prevSpecificCoffee) => [...prevSpecificCoffee, newCoffee]);
  };

  const handleDeleteProduct = (productIndex) => {
    setSpecificCoffee((prevSpecificCoffee) =>
      prevSpecificCoffee.filter((_, index) => index !== productIndex)
    );
  };
  
  const RemoveCartContent = () => {
    setSpecificCoffee(RemoveArray);
  }
  

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route
          path="/ShoppingCart"
          element={
            <ShoppingCart
              handleDeleteProduct={handleDeleteProduct}
              RemoveCartContent={RemoveCartContent}
              SpecificCoffee={SpecificCoffee}
            />
          }
        />
        <Route
          path="/Shop/:id"
          element={<CoffeeBeansDetails CoffeeAdd={CoffeeAdd} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
