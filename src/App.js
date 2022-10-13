import React from 'react';
import Featured from './components/Featured';
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer';
import BTCTracker from './components/BTCtracker';
// import BTCtracker from './components/BTCtracker';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <BTCTracker />
      <Footer />
    </>
  );
}

export default App;
