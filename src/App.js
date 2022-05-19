import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Navbar from "./components/Navbar/Navbar";
import Platon from './components/Work/Platon/Platon';
import Solane from './components/Work/Solane/Solane';
import Sedal from './components/Work/Sedal/Sedal';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/work" element={<Work />}>
          <Route path="/work/platon" element={<Platon />} />
          <Route path="/work/solane" element={<Solane />} />
          <Route path="/work/Sedal" element={<Sedal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
