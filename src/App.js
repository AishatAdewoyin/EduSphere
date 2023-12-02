import React from 'react';
import Developer from './components/Developer'
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Developer />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;