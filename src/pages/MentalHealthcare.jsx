import React from 'react';
import useTitle from '../hooks/useTitle';
import { 
  Video, 
  ArrowRight
} from 'lucide-react';

const MentalHealthcare = () => {
  useTitle('Mental Healthcare');

  const services = [
    { title: "Anxiety & Stress", action: "Get Consult", icon: Video },
    { title: "Depression Support", action: "Get Consult", icon: Video },
    { title: "CBT Therapy", action: "Get Consult", icon: Video },
    { title: "Child & Adolescent", action: "Get Consult", icon: Video },
    { title: "Postpartum Care", action: "Get Consult", icon: Video },
    { title: "Sleep & Fatigue", action: "Get Consult", icon: Video },
    { title: "Relationship Issues", action: "Get Consult", icon: Video },
    { title: "Workplace Stress", action: "Get Consult", icon: Video },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-manrope">
      {/* Hero Section */}
      <section className="bg-white min-h-[100px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-dots opacity-40"></div>
        <div className="max-w-[1200px] mx-auto w-full px-4 relative z-10 text-center">
          <div className="flex flex-col items-center mt-20">
            {/* Blank Hero space */}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white pb-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-full px-4 z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto px-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-white to-[#F0F9FF] p-8 rounded-[5px] border border-slate-100 flex flex-col items-start gap-5 w-[260px] h-[300px] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1 mt-auto w-full">
                  <h3 className="font-bold text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight">
                    {service.title}
                  </h3>
                  <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer">
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

export default MentalHealthcare;
