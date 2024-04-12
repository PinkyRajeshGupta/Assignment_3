import "./App.css";
import Header from "./componrnts/Header";
import { Route, Routes } from "react-router-dom";
import Body from "./componrnts/Body";
import About from "./componrnts/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
