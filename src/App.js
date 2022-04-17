
import { Route, Routes } from 'react-router-dom';
import Header from './Compunant/Header/Header';
import Home from './Home/HomeBanner/Home';
import Register from './Register/Register';
import Login from './Login/Login';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path= "/register" element={<Register/>}></Route>
        <Route path= "/login" element={<Login/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
