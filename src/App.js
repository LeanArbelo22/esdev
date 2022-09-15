import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/development" element={<Home />} />
      </Routes>

      <Navbar />
      <Home />
    </div>
  );
}

export default App;
