import Home from "./pages/Home";
import MenuBar from "./components/MenuBar";
import Developer from "./pages/Developer";
import Actor from "./pages/Actor";
import Copywriter from "./pages/Copywriter";
import CreativeWriter from "./pages/CreativeWriter";
import Footer from "./components/Footer";
import Collab from "./pages/Collab";
import PrivacyPolicy from "./pages/PrivacyPolicy";


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="main-grid">
      <MenuBar />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/developer' element={<Developer />} />
            <Route path='/actor' element={<Actor/>} />
            <Route path='/copywriter' element={<Copywriter />} />
            <Route path='/creativewriter' element={<CreativeWriter />} />
            <Route path='/collab' element={<Collab />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  )
};

export default App;