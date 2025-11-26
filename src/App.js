import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import Header from './components/header/header'
import Product from './pages/product/product'
import About from './components/about/about';
import Contact from './components/contact/contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
