import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, Contact, Services} from './container';

import { Navbar } from './components';
import './App.scss';
import Logo from './components/Logo/Logo';


const App = () => {
  return (
    <div className="app">
     
      <Logo />
      <Header />
      <Navbar />
      <About />
      <Skills />
      {/* <Services /> */}
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;