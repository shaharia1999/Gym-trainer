
import { Route, Routes } from 'react-router-dom';
import Header from './Compunant/Header/Header';
import Home from './Home/HomeBanner/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
