import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useTitle from '../hooks/useTitle';

const HealthDestination = () => {
  useTitle('Health Destination');

  const homeDestinations = [
    { name: "Dhaka" },
    { name: "Chittagong" },
    { name: "Sylhet" },
    { name: "Rajshahi" },
    { name: "Bogura" },
    { name: "Rangpur" },
    { name: "Mymensingh" },
    { name: "Khulna" },
    { name: "Barishal" }
  ];

  const abroadDestinations = [
    { name: "India" },
    { name: "Thailand" },
    { name: "Singapore" },
    { name: "Malaysia" },
    { name: "Dubai" },
    { name: "Pakistan" }
  ];

  return (
    <div className="min-h-screen login-bg flex flex-col items-center justify-center px-4 relative overflow-hidden font-manrope py-12">
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

      <main className="w-full max-w-[1200px] z-10 mt-8 md:mt-0">
        <div className="glass-card rounded-[16px] border border-white/50 overflow-hidden flex flex-col">
          {/* Home Country Section */}
          <div className="p-6 md:p-8 pb-4 md:pb-5 border-b border-white/50 bg-white/10">
            <h2 className="text-[20px] md:text-[22px] font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] mb-5">
              Home Country (Bangladesh)
            </h2>
            <div className="flex flex-wrap gap-3">
              {homeDestinations.map((dest, idx) => (
                <div key={idx} className="flex-1 min-w-[115px] group cursor-pointer rounded-[8px] border border-white/50 bg-white/40 hover:bg-white/60 transition-all duration-300 p-3.5 flex flex-col gap-3">
                  <div className="flex items-center">
                    <h3 className="font-bold text-[14.5px] bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-700 group-hover:from-[#0089BA] group-hover:to-[#008E6B] transition-all">{dest.name}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-600 font-bold text-[13px]">
                    Book Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abroad Country Section */}
          <div className="px-6 md:px-8 pt-4 md:pt-5 pb-5 md:pb-6 bg-white/20">
            <h2 className="text-[20px] md:text-[22px] font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] mb-5">
              Abroad Countries
            </h2>
            <div className="flex flex-wrap gap-3">
              {abroadDestinations.map((dest, idx) => (
                <div key={idx} className="flex-1 min-w-[115px] group cursor-pointer rounded-[8px] border border-white/50 bg-white/40 hover:bg-white/60 transition-all duration-300 p-3.5 flex flex-col gap-3">
                  <div className="flex items-center">
                    <h3 className="font-bold text-[14.5px] bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-700 group-hover:from-[#0089BA] group-hover:to-[#008E6B] transition-all">{dest.name}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-600 font-bold text-[13px]">
                    Book Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Visual Polish Image */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        <img 
          alt="" 
          className="w-full h-full object-cover opacity-5" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfgq-N4vQNM7b2sRGwH24RO538fqY3gg3GaVEA9cVgk3mGem4wd89nRz5ab84Lt5Sb71CHIBdF0ngAFpsrIZAG-BXHmpNjZZvSueBaUlOeGbEripj6AheOFv8CyaCHv5q-dgX8pQyDP3Syc623926e8nfpAQ7z5oFfTvrznmVSJT3H3Gzy479RLU9az_FTmxSeFSoGnCH2OkAmK4Otu2640wLrqqj4xARyPVgxhFm_m_TVfa65WZtHc8m-ZQ1eWGZVDI64I7aYSyQ" 
        />
      </div>
    </div>
  );
};

export default HealthDestination;
