import React from 'react';
import useTitle from '../hooks/useTitle';
import { Brain, Ribbon, Scissors, Microscope, ArrowRight, Stethoscope, UserRound, HeartHandshake, Activity } from 'lucide-react';

const SecondOpinion = () => {
  useTitle('Second Opinion');

  const services = [
    { title: "Radiology", icon: Microscope },
    { title: "Neurology", icon: Brain },
    { title: "Oncology", icon: Ribbon },
    { title: "Orthopedic Surgery", icon: Scissors },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Matching FindDoctor Style */}
      <section className="bg-white min-h-[300px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-dots opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Hero content placeholder */}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white pb-16 relative overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[1200px] z-10">
          {/* Section Headers */}
          <div className="flex flex-col items-start mb-10 ml-0 lg:ml-[25px]">
            <h2 className="text-[24px] font-bold text-slate-900 leading-tight">Select Medical Service</h2>
            <p className="text-slate-500 font-medium text-[15px] mt-1">Most Popular Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-white to-[#F0F9FF] p-8 rounded-[5px] border border-slate-100 flex flex-col items-start gap-5 w-[260px] h-[300px] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3 mt-auto w-full">
                  <h3 className="font-bold text-[17px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight">
                    {service.title}
                  </h3>
                  <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer mt-1">
                    Get a Second Opinion
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* New Section: Medical Specialties with Slider */}
          <div className="mt-10 px-4 lg:px-[25px]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex flex-col items-start">
                <h2 className="text-[24px] font-bold text-slate-900 leading-tight">Medical Specialties</h2>
                <p className="text-slate-500 font-medium text-[15px] mt-1">Explore specialized care opinions</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    document.getElementById('specialties-slider').scrollBy({ left: -300, behavior: 'smooth' });
                  }}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('specialties-slider').scrollBy({ left: 300, behavior: 'smooth' });
                  }}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div 
              id="specialties-slider"
              className="flex gap-8 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { title: "Cardiology" },
                { title: "Dermatology" },
                { title: "Endocrinology" },
                { title: "Family Medicine" },
                { title: "Gastroenterology" },
                { title: "Geriatrics" },
                { title: "Infectious Disease" },
                { title: "Internal Medicine" },
                { title: "Nephrology" },
                { title: "Neurology" },
                { title: "Oncology" },
                { title: "Pediatrics" },
                { title: "Podiatry" },
                { title: "Pulmonology" },
                { title: "Radiology" },
                { title: "Rheumatology" }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-b from-white to-[#F0F9FF] p-8 rounded-[5px] border border-slate-100 flex flex-col items-start gap-5 w-[260px] h-[300px] transition-all shrink-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-3 mt-auto w-full">
                    <h3 className="font-bold text-[17px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight">
                      {service.title}
                    </h3>
                    <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer mt-1">
                      Get a Second Opinion
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Section: Surgical Specialties with Slider */}
          <div className="mt-4 px-4 lg:px-[25px]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex flex-col items-start">
                <h2 className="text-[24px] font-bold text-slate-900 leading-tight">Surgical Specialties</h2>
                <p className="text-slate-500 font-medium text-[15px] mt-1">Specialized surgical second opinions</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    document.getElementById('surgical-slider').scrollBy({ left: -300, behavior: 'smooth' });
                  }}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('surgical-slider').scrollBy({ left: 300, behavior: 'smooth' });
                  }}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div 
              id="surgical-slider"
              className="flex gap-8 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { title: "Bariatric Surgery" },
                { title: "Cardiothoracic Surgery" },
                { title: "ENT Surgery" },
                { title: "General Surgery" },
                { title: "Obstetrics & Gynaecology" },
                { title: "Ophthalmology" },
                { title: "Orthopaedic Surgery" },
                { title: "Plastic Surgery" },
                { title: "Urology" },
                { title: "Vascular Surgery" }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-b from-white to-[#F0F9FF] p-8 rounded-[5px] border border-slate-100 flex flex-col items-start gap-5 w-[260px] h-[300px] transition-all shrink-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-3 mt-auto w-full">
                    <h3 className="font-bold text-[17px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight">
                      {service.title}
                    </h3>
                    <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer mt-1">
                      Get a Second Opinion
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondOpinion;
