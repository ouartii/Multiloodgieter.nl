import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import QuotePage from './pages/QuotePage';
import ThankYouPage from './pages/ThankYouPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diensten" element={<ServicesPage />} />
            <Route path="/diensten/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/offerte" element={<QuotePage />} />
            <Route path="/bedankt" element={<ThankYouPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
