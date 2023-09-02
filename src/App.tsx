import './App.css'
import './css/Main.css';
import './css/Header.css';
import './css/Footer.css';
import './css/Cqnf.css';

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import Cqnf from './components/cqnf/Cqnf';

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Gdesign/" element={<Main />}>
            <Route path="ce-que-nous-faisons" element={<Cqnf />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
