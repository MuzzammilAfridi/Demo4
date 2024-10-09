import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nabvar from './Components/Nabvar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Form from './Components/Form';
import Footer from './Components/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Nabvar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
