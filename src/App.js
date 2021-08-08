import React from  'react';
import Section from './components/Section';
import Header from './components/Header';
import Section2 from './components/section2';
import About from './components/About';
import Team from './components/Team';
import Grow from './components/Grow';
import Portfolio from './components/Portfolio';
import Contact from './components/contact';
import Footer from './components/footer'

function App() {
  return ( 
    <div className="MyApp">
      <Header />
      <Section />
      <Section2 />
      <About />
      <Team />
      <Grow />
      <Portfolio />
      <Grow />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
