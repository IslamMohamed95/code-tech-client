import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./layouts/Navbar/Nav";
import { WebProvider } from "./context/WebContext";
import Home from "./components/Home/Home";
import Footer from "./layouts/Footer/Footer";
import Loading from "./layouts/loading/Loading";
import AboutPage from "./components/AboutPage/AboutPage";
import Products from "./components/Products/Products";

function App() {
  const x = 30;
  return (
    <div className="App">
      <Router>
        <WebProvider>
          <Loading />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
        </WebProvider>
      </Router>
    </div>
  );
}

export default App;
