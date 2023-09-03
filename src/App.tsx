import './App.css';
import './css/Cqnf.css';
import './css/Footer.css';
import './css/Header.css';
import './css/Main.css';

import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
