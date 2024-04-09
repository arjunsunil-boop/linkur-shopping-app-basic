import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Buyproducts from './components/Buyproducts';
import Search from './components/Search';
import Home from './components/Home';
import ViewProducts from './components/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Buy' element={<Buyproducts/>}/>
        <Route path='/Search' element={<Search/>} />
        <Route path='/view' element={<ViewProducts/>}/>
      </Routes>
      
      </BrowserRouter>

     

    </div>
  );
}

export default App;
