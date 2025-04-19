import React, { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PricingOption from './Components/PricingOption/PricingOption';


const App = () => {

  const fetchData = fetch("pricingData.json").then((res) => res.json());



  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <PricingOption fetchData={fetchData} />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;