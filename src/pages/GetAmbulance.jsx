import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, MapPin, Navigation, Truck, ArrowLeft, Clock, MessageCircle } from 'lucide-react';
import useTitle from '../hooks/useTitle';

const GetAmbulance = () => {
  useTitle('Request Ambulance');

  // Dummy Data for Cascaded Search
  const data = {
    divisions: ["Dhaka", "Chittagong", "Rajshahi", "Sylhet"],
    districts: {
      "Dhaka": ["Dhaka", "Gazipur", "Narayanganj"],
      "Chittagong": ["Chittagong", "Cox's Bazar", "Feni"],
      "Rajshahi": ["Rajshahi", "Bogra", "Pabna"],
      "Sylhet": ["Sylhet", "Moulvibazar", "Habiganj"]
    },
    upazilas: {
      "Dhaka": ["Mirpur", "Gulshan", "Dhanmondi"],
      "Gazipur": ["Gazipur Sadar", "Kaliakair"],
      "Narayanganj": ["Narayanganj Sadar", "Rupganj"],
      "Chittagong": ["Panchlaish", "Halishahar"],
      "Cox's Bazar": ["Cox's Bazar Sadar", "Teknaf"],
    }
  };

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict("");
    setSelectedUpazila("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedUpazila("");
  };

  return (
    <div className="min-h-screen login-bg flex items-center justify-center p-4 relative overflow-hidden font-manrope">
      {/* Main Container */}
      <main className="w-full max-w-[1100px] z-10">
        <div className="glass-card rounded-xl p-8 md:p-12">
          {/* Top Row: Back Button & WhatsApp Booking */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-2">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[16px] group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <a 
              href="https://wa.me/8801775108671" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-600 rounded-full border border-green-200 hover:bg-green-100 transition-all font-bold text-[14px]"
            >
              <MessageCircle className="w-4 h-4" />
              Call for Booking: +880 1775-108671
            </a>
          </div>

          <div className="mb-6 text-left">
            <h1 className="text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] mb-2 leading-tight inline-block">
              Request Ambulance
            </h1>
            <p className="text-[16px] text-slate-500 font-medium">Fast and reliable emergency service in your area</p>
          </div>

          {/* Form (Cascaded Search Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 bg-white/30 p-1.5 rounded-xl backdrop-blur-sm border border-white/50">
            
            {/* Division */}
            <div className="relative group">
              <select 
                value={selectedDivision}
                onChange={handleDivisionChange}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Division</option>
                {data.divisions.map(div => <option key={div} value={div}>{div}</option>)}
              </select>
            </div>

            {/* District */}
            <div className="relative group">
              <select 
                value={selectedDistrict}
                onChange={handleDistrictChange}
                disabled={!selectedDivision}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select District</option>
                {selectedDivision && data.districts[selectedDivision]?.map(dist => <option key={dist} value={dist}>{dist}</option>)}
              </select>
            </div>

            {/* Thana / Upazila */}
            <div className="relative group">
              <select 
                value={selectedUpazila}
                onChange={(e) => setSelectedUpazila(e.target.value)}
                disabled={!selectedDistrict}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Thana / Upazila</option>
                {selectedDistrict && data.upazilas[selectedDistrict]?.map(up => <option key={up} value={up}>{up}</option>)}
              </select>
            </div>

            {/* Pickup Point */}
            <div className="relative group">
              <input 
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400" 
                placeholder="Pickup Point" 
                required 
                type="text"
              />
            </div>

            {/* Drop Point */}
            <div className="relative group">
              <input 
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400" 
                placeholder="Drop Point" 
                required 
                type="text"
              />
            </div>

            {/* Search Button */}
            <button className="primary-gradient w-full py-2 rounded-lg text-[13px] font-bold text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none">
              Find Ambulance
            </button>

          </div>
        </div>
      </main>

      {/* Visual Polish Image */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        <img 
          alt="" 
          className="w-full h-full object-cover opacity-10" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfgq-N4vQNM7b2sRGwH24RO538fqY3gg3GaVEA9cVgk3mGem4wd89nRz5ab84Lt5Sb71CHIBdF0ngAFpsrIZAG-BXHmpNjZZvSueBaUlOeGbEripj6AheOFv8CyaCHv5q-dgX8pQyDP3Syc623926e8nfpAQ7z5oFfTvrznmVSJT3H3Gzy479RLU9az_FTmxSeFSoGnCH2OkAmK4Otu2640wLrqqj4xARyPVgxhFm_m_TVfa65WZtHc8m-ZQ1eWGZVDI64I7aYSyQ" 
        />
      </div>
    </div>
  );
};

export default GetAmbulance;
