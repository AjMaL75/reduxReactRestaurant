
import './App.css';
import Footer from './FooterComponent/Footer';
import Header from './HeaderComponent/Header';
import Restaurant from './Restaurant';
import { Route,Routes } from 'react-router-dom';
import Resview from './Resview';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Restaurant></Restaurant>}/>
        <Route path='/resview/:id' element={<Resview/>}/>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
