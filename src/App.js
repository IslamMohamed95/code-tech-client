import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./layouts/Navbar/Nav";
import { WebProvider } from "./context/WebContext";
import Home from "./components/Home/Home";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <WebProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </WebProvider>
      </Router>
    </div>
  );
}

export default App;
