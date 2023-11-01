import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './Components/HomePage';
import Shop from './Components/Shop';
import ShoppingCart from './Components/ShoppingCart';
import CoffeeBeansDetails from './Components/CoffeeBeansDetails';
import { useState } from 'react';

import './index.css';

function App() {
  // Manage the SpecificCoffee state in the App component
  const [SpecificCoffee, setSpecificCoffee] = useState([]);

  const CoffeeAdd = (newCoffee) => {
    // Update the SpecificCoffee state when adding coffee
    setSpecificCoffee((prevSpecificCoffee) => [...prevSpecificCoffee, newCoffee]);
  };

  const handleDeleteProduct = (productIndex) => {
    // Use filter to create a new array without the product to delete
    setSpecificCoffee((prevSpecificCoffee) =>
      prevSpecificCoffee.filter((_, index) => index !== productIndex)
    );
  };
  

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
