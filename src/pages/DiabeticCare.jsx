import React from 'react';
import useTitle from '../hooks/useTitle';
import { 
  Stethoscope,
  Microscope,
  ArrowRight
} from 'lucide-react';

const DiabeticCare = () => {
  useTitle('Diabetic Care');

  const services = [
    { title: "Online Doctor", sub: "Diabetic Care", icon: Stethoscope },
    { title: "Medicine For", sub: "Diabetic Care", icon: Stethoscope },
    { title: "Monitoring Diabetic", sub: "Monitoring & Care", icon: Stethoscope },
    { title: "Diet and Nutrition", sub: "Control Blood Sugar", icon: Stethoscope },
    { title: "Diabetes Educator", sub: "and Health Coach", icon: Stethoscope },
  ];

  const labPackages = [
    { title: "Pre Regular Diabetic", sub: "Health Check-up", icon: Microscope },
    { title: "Regular Diabetic", sub: "Health Check-up", icon: Microscope },
    { title: "Comprehensive", sub: "Diabetic Check-up", icon: Microscope },
    { title: "Advance Diabetic", sub: "Health Check-up", icon: Microscope },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-manrope">
      {/* Hero Section */}
      <section className="bg-white min-h-[300px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-dots opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex flex-col items-center">
            {/* Blank Hero */}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white pb-24 relative overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[1200px] z-10">
          
          <div className="flex flex-col items-start mb-10 ml-0 lg:ml-[25px]">
            <h2 className="text-[24px] font-bold text-slate-900 leading-tight">Diabetic Care Services</h2>
            <p className="text-slate-500 font-medium text-[15px] mt-1">Specialized support for sugar management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full px-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-white to-[#F0F9FF] p-6 rounded-[5px] border border-slate-100 flex flex-col items-start gap-4 h-[280px] transition-all w-full"
              >
                <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3 mt-auto w-full">
                  <h3 className="font-bold text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] font-medium -mt-1">{service.sub}</p>
                  <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer mt-1">
                    Get Consult
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start mb-10 ml-0 lg:ml-[25px] mt-10">
            <h2 className="text-[24px] font-bold text-slate-900 leading-tight">Diabetic Lab Tests Check-Up Packages</h2>
            <p className="text-slate-500 font-medium text-[15px] mt-1">Comprehensive lab screenings for diabetic health</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto px-4">
            {labPackages.map((pkg, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-white to-[#F0F9FF] p-8 rounded-[5px] border border-slate-100 flex flex-col items-start gap-5 w-[260px] h-[300px] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                  <pkg.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3 mt-auto w-full">
                  <h3 className="font-bold text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] font-medium -mt-1">{pkg.sub}</p>
                  <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer mt-1">
                    Book Test
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

export default DiabeticCare;
