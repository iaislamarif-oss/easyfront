import React from 'react';
import useTitle from '../hooks/useTitle';
import { 
  Video,
  Pill,
  Microscope,
  Truck,
  Home,
  ShieldCheck,
  Apple,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const PrimaryHealthcare = () => {
  useTitle('Primary Healthcare');

  const familyServices = [
    { title: "Video Consult with (GP)", action: "Request Appointment", icon: Video },
    { title: "Online Buy Medicine", action: "Order Medicine", icon: Pill },
    { title: "Diagnostic Lab Tests", action: "Book Labs", icon: Microscope },
    { title: "Ambulance Support", action: "Get Ambulance Service", icon: Truck },
    { title: "Homecare Support", action: "Book Service", icon: Home },
    { title: "Health Check Package", action: "Book Package", icon: ShieldCheck },
    { title: "Diet & Nutrition Plan", action: "Get Nutrition Plan", icon: Apple },
    { title: "Health Training", action: "Read More", icon: BookOpen },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Matching Brand Style */}
      <section className="bg-white min-h-[300px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-dots opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Hero content placeholder */}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white pb-24 relative overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[1200px] z-10">
          
          {/* Section 1: Family Health Services */}
          <div className="flex flex-col items-start mb-10 ml-0 lg:ml-[25px]">
            <h2 className="text-[24px] font-bold text-slate-900 leading-tight">Family Health Services</h2>
            <p className="text-slate-500 font-medium text-[15px] mt-1">Comprehensive care for every family member</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto">
            {familyServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-white to-[#F0F9FF] p-8 rounded-[5px] border border-slate-100 flex flex-col items-start gap-5 w-[260px] h-[300px] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3 mt-auto w-full">
                  <h3 className="font-bold text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight">
                    {service.title}
                  </h3>
                  <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer mt-1">
                    {service.action}
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

export default PrimaryHealthcare;
