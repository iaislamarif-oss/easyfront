import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, MapPin, UserRound, Building2, Landmark } from 'lucide-react';
import useTitle from '../hooks/useTitle';

const RequestAppointment = () => {
  useTitle('Request Appointment');

  // Dummy Data
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
      // ... more as needed
    },
    specialists: ["Cardiologist", "Dermatologist", "Neurologist", "Orthopedic", "Pediatrician"]
  };

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict("");
    setSelectedUpazila("");
    setSelectedSpecialist("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedUpazila("");
    setSelectedSpecialist("");
  };

  const handleUpazilaChange = (e) => {
    setSelectedUpazila(e.target.value);
    setSelectedSpecialist("");
  };

  return (
    <div className="min-h-screen login-bg flex flex-col items-center justify-center p-4 relative overflow-hidden font-manrope">
      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[16px] z-20 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back
      </Link>

      {/* Background Decorative Element */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#89ceff]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#7bf9cb]/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Container */}
      <main className="w-full max-w-[900px] z-10">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="text-left mb-10">
            <h1 className="text-[32px] font-bold text-primary-container mb-2">Request an appointment for a video consultation</h1>
            <p className="text-on-surface-variant">Find the best specialist doctors in your area</p>
          </div>

          {/* Search Form / Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 bg-white/30 p-1.5 rounded-xl backdrop-blur-sm border border-white/50">
            
            {/* Division */}
            <div className="relative group">
              <select 
                value={selectedDivision}
                onChange={handleDivisionChange}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all appearance-none cursor-pointer"
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
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select District</option>
                {selectedDivision && data.districts[selectedDivision]?.map(dist => <option key={dist} value={dist}>{dist}</option>)}
              </select>
            </div>

            {/* Upazila */}
            <div className="relative group">
              <select 
                value={selectedUpazila}
                onChange={handleUpazilaChange}
                disabled={!selectedDistrict}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select Upazila</option>
                {selectedDistrict && data.upazilas[selectedDistrict]?.map(up => <option key={up} value={up}>{up}</option>)}
              </select>
            </div>

            {/* Specialist */}
            <div className="relative group">
              <select 
                value={selectedSpecialist}
                onChange={(e) => setSelectedSpecialist(e.target.value)}
                disabled={!selectedUpazila}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[13px] focus:border-brand-600 focus:ring-0 focus:outline-none transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select Specialist</option>
                {data.specialists.map(spec => <option key={spec} value={spec}>{spec}</option>)}
              </select>
            </div>

            {/* Search Button */}
            <button className="primary-gradient w-full py-1.5 rounded-lg text-[13px] font-bold text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none">
              Search
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

export default RequestAppointment;
