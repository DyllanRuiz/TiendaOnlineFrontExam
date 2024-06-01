import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Home from "../pages/home/Home.jsx";
import Mujeres from "../pages/mujeres/Mujeres.jsx";
import Hombres from "../pages/hombres/Hombres.jsx";
import Kids from "../pages/kids/Kids.jsx";
import Carts from "../pages/carts/Carts.jsx";


const RoutesComponent = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mujeres" element={<Mujeres />} />
          <Route path="/hombres" element={<Hombres />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default RoutesComponent;
