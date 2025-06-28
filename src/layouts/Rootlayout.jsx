import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';

const Rootlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="pt-16">
    
        
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Rootlayout;