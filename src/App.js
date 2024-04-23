
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer.jsx';
import kids_banner from './components/assets/banner_kids.png';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import ShopCategory from './pages/shopCategory.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/Womens' element={<ShopCategory  banner={women_banner} category="women"/>}></Route>
        <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>

        <Route path='/product' element={<product/>}/>
        <Route path=':productId' element={<productId/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
   <Footer/>
     
    </div>
  );
}

export default App;
