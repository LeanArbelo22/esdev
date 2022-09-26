import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Menu from './Components/Menu/Menu';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
