import React from 'react';
import useTitle from '../hooks/useTitle';
import { 
  UserRound, 
  ArrowRight, 
  Stethoscope, 
  HeartHandshake, 
  Dumbbell, 
  FlaskConical, 
  Syringe, 
  ShieldCheck, 
  Droplet 
} from 'lucide-react';

const HomeCare = () => {
  useTitle('Home Care Services');

  const services = [
    { main: "Nurse", sub: "@ Home", icon: Stethoscope },
    { main: "Caregiver", sub: "@ Home", icon: HeartHandshake },
    { main: "Doctor", sub: "@ Home", icon: UserRound },
    { main: "Physio", sub: "@ Home", icon: Dumbbell },
    { main: "Lab", sub: "@ Home", icon: FlaskConical },
    { main: "Vaccination", sub: "@ Home", icon: Syringe },
    { main: "Smart Care", sub: "@ Home", icon: ShieldCheck },
    { main: "IV Drip", sub: "@ Home", icon: Droplet },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Matching FindDoctor Style */}
      <section className="bg-white min-h-[300px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-dots opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Hero content placeholder */}
        </div>
      </section>

      {/* Main Content with Pure White Background */}
      <section className="bg-white pb-24 relative overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[1200px] z-10">
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
                    {service.main} {service.sub}
                  </h3>
                  <button className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer">
                    View Service
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

export default HomeCare;
