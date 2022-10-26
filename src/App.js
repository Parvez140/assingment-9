import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Blogs from './components/Blogs/Blogs';
import Dashbord from './components/Dashbord/Dashbord';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
