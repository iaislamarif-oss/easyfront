import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomeCare from './pages/HomeCare';
import Login from './pages/Login';
import RequestAppointment from './pages/RequestAppointment';
import FindDoctor from './pages/FindDoctor';
import SecondOpinion from './pages/SecondOpinion';
import HealthCheck from './pages/HealthCheck';
import DiabeticCare from './pages/DiabeticCare';
import PrimaryHealthcare from './pages/PrimaryHealthcare';
import LabReport from './pages/LabReport';
import MentalHealthcare from './pages/MentalHealthcare';
import Membership from './pages/Membership';
import TeleHealthAgent from './pages/TeleHealthAgent';
import SpecialistSearch from './pages/SpecialistSearch';
import GetAmbulance from './pages/GetAmbulance';
import WomenCare from './pages/WomenCare';
import WhoWeAre from './pages/WhoWeAre';


import { MessageCircle, Mail, Phone, MessageSquare } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = [
    '/login', 
    '/request-appointment', 
    '/lab-report', 
    '/tele-health-agent',
    '/get-ambulance',
    '/find-specialist',
    '/easy-healthcare-specialist',
    '/dhaka-city-specialist',
    '/metro-city-specialist',
    '/select-hospital-specialist'
  ].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col relative">
      {!hideLayout && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideLayout && <Footer />}
      
      {/* Floating Expandable Contact Menu */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-[100] group">
        {/* Hidden Icons that appear on group hover */}
        <div className="flex flex-col items-center gap-3 mb-1 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          {/* Phone */}
          <a href="tel:+8801612737469" title="01612-737469" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-600 hover:scale-110 transition-all">
            <Phone className="w-5 h-5" />
          </a>
          {/* Email */}
          <a href="mailto:contact.ehcdc@gmail.com" title="contact.ehcdc@gmail.com" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-600 hover:scale-110 transition-all">
            <Mail className="w-5 h-5" />
          </a>
          {/* Message / Chat */}
          <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-600 hover:scale-110 transition-all">
            <MessageSquare className="w-5 h-5" />
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/8801775108671" title="01775-108671" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[#25D366] hover:scale-110 transition-all">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Main Trigger Icon - Smaller */}
        <button className="w-12 h-12 bg-gradient-to-r from-[#0089BA] to-[#008E6B] text-white rounded-full flex items-center justify-center hover:rotate-90 transition-all duration-300 cursor-pointer">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-care" element={<HomeCare />} />
          <Route path="/login" element={<Login />} />
          <Route path="/request-appointment" element={<RequestAppointment />} />
          <Route path="/find-doctor" element={<FindDoctor />} />
          <Route path="/second-opinion" element={<SecondOpinion />} />
          <Route path="/health-check" element={<HealthCheck />} />
          <Route path="/diabetic-care" element={<DiabeticCare />} />
          <Route path="/primary-healthcare" element={<PrimaryHealthcare />} />
          <Route path="/lab-report" element={<LabReport />} />
          <Route path="/mental-healthcare" element={<MentalHealthcare />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/tele-health-agent" element={<TeleHealthAgent />} />
          <Route path="/get-ambulance" element={<GetAmbulance />} />
          <Route path="/women-care" element={<WomenCare />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/find-specialist" element={<SpecialistSearch />} />
          <Route path="/easy-healthcare-specialist" element={<SpecialistSearch />} />
          <Route path="/dhaka-city-specialist" element={<SpecialistSearch />} />
          <Route path="/metro-city-specialist" element={<SpecialistSearch />} />
          <Route path="/select-hospital-specialist" element={<SpecialistSearch />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
