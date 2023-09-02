import './App.css';
import './css/Cqnf.css';
import './css/Footer.css';
import './css/Header.css';
import './css/Main.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cqnf from './components/cqnf/Cqnf';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/ce-que-nous-faisons" element={<Cqnf />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
