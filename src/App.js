import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./layouts/Navbar/Nav";
import { WebProvider } from "./context/WebContext";
import Home from "./components/Home/Home";
import Footer from "./layouts/Footer/Footer";
import Loading from "./layouts/loading/Loading";
import AboutPage from "./components/AboutPage/AboutPage";
import Products from "./components/Products/Products";
import PriceList from "./components/PriceList/PriceList";
import WhatsApp from "./layouts/WhatsApp/WhatsApp";

import "./i18n/i18n";

function App() {
  return (
    <div className="App">
      <Router>
        <WebProvider>
          <Loading />
          <Nav />
          <div className="pagesHolder">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/product/:category/:option" element={<Products />} />
              <Route path="/pricelist" element={<PriceList />} />
            </Routes>
          </div>
          <WhatsApp phoneNumber="+920007401" />
          <Footer />
        </WebProvider>
      </Router>
    </div>
  );
}

export default App;
