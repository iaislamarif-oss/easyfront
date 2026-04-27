import React from 'react';
import useTitle from '../hooks/useTitle';
import { 
  Video,
  ArrowRight
} from 'lucide-react';

const WomenCare = () => {
  useTitle('Women Care');

  const services = [
    { title: "Period Problem", icon: Video },
    { title: "Pregnancy Care", icon: Video },
    { title: "UTI Treatment", icon: Video },
    { title: "Monopause Support", icon: Video },
    { title: "Breast Health", icon: Video },
    { title: "Pelvic Pain", icon: Video },
    { title: "Uterine Fibroids", icon: Video },
    { title: "Bladder Urinary", icon: Video },
    { title: "Vagina & Vulva Care", icon: Video },
    { title: "STI/D Care", icon: Video },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-manrope">
      {/* Hero Section Placeholder (to maintain spacing) */}
      <section className="bg-white min-h-[100px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-dots opacity-40"></div>
        <div className="max-w-[1200px] mx-auto w-full px-4 relative z-10 text-center">
            <h1 className="text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] mb-2 mt-20">
              Women Care Services
            </h1>
            <p className="text-slate-500 font-medium">Comprehensive healthcare solutions for every stage of a woman's life</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white pb-24 pt-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-full px-4 z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-white to-[#F0F9FF] p-6 rounded-[5px] border border-slate-100 flex flex-col items-start gap-4 h-[220px] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1 mt-auto w-full">
                  <h3 className="font-bold text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight h-[40px] flex items-center">
                    {service.title}
                  </h3>
                  <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer">
                    Get Consult
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default WomenCare;
