
import { Route, Routes } from 'react-router-dom';
import Header from './Compunant/Header/Header';
import Home from './Home/HomeBanner/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import ChackOut from './Compunant/ChackOut/ChackOut';
import Footer from './Compunant/Footer/Footer';


import './App.css'
import RequirteAuth from './Compunant/RequreAuth/RequirteAuth';
import About from './About/About';
import Bloag from './Bloag/Bloag';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path= "/register" element={<Register/>}></Route>
        <Route path= "/login" element={<Login/>}></Route>
        <Route path="/chackout" element={<RequirteAuth>
          <ChackOut></ChackOut>
        </RequirteAuth>} ></Route>
        <Route path="/about"element={<About></About>}></Route>
        <Route path="/blog" element={<Bloag/>}></Route>
        
      </Routes>
    
      <Footer></Footer>
    
    </div>
  );
}

export default App;
