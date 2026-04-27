import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Search, MapPin, UserRound, Building2, Landmark, ArrowRight } from 'lucide-react';
import useTitle from '../hooks/useTitle';

const SpecialistSearch = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const searchTypes = [
    { name: "Find Doctor Near You", path: "/find-specialist" },
    { name: "Easy Healthcare Specialist Doctor", path: "/easy-healthcare-specialist" },
    { name: "Dhaka City Specialist Doctor", path: "/dhaka-city-specialist" },
    { name: "Metro City Specialist Doctor", path: "/metro-city-specialist" },
    { name: "Select Hospital Specialist Doctor", path: "/select-hospital-specialist" }
  ];

  const activeType = searchTypes.find(t => t.path === currentPath) || searchTypes[0];
  useTitle(activeType.name);

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
      {/* Background Decorative Element */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#89ceff]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#7bf9cb]/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Container */}
      <main className="w-full max-w-[1100px] z-10 mt-4">
        <div className="glass-card rounded-2xl p-8 md:p-10">
          
          {/* Top Bar: Back Button (Top) & Category Menu (Below) */}
          <div className="flex flex-col items-start gap-6 mb-8 border-b border-slate-100 pb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[16px] group shrink-0"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {searchTypes.map((type) => (
                <Link
                  key={type.path}
                  to={type.path}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-bold transition-all border cursor-pointer ${
                    currentPath === type.path
                      ? 'bg-gradient-to-br from-[#0089BA] to-[#008E6B] text-white border-transparent'
                      : 'bg-white text-slate-500 border-slate-200 hover:bg-gradient-to-br hover:from-[#0089BA] hover:to-[#008E6B] hover:text-white hover:border-transparent'
                  }`}
                >
                  {type.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-10 text-left">
            <h1 className="text-[28px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] mb-2">
              {activeType.name}
            </h1>
          </div>

          {/* Conditionally Render: Department Tabs (Easy Healthcare) OR Search Bar (Others) */}
          {currentPath === '/easy-healthcare-specialist' ? (
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
                {["Cardiology", "Dermatology", "Neurology", "Orthopedics", "Pediatrics", "Gynecology", "ENT", "Dental"].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedSpecialist(dept)}
                    className={`px-4 py-2.5 rounded-lg text-[12px] font-bold transition-all border cursor-pointer ${
                      selectedSpecialist === dept
                        ? 'bg-gradient-to-br from-[#0089BA] to-[#008E6B] text-white border-transparent shadow-lg shadow-brand-100'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-gradient-to-br hover:from-[#0089BA] hover:to-[#008E6B] hover:text-white hover:border-transparent'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Search Bar (Cascaded) */
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
          )}

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

export default SpecialistSearch;
