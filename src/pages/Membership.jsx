import React from 'react';
import useTitle from '../hooks/useTitle';
import { 
  ShieldCheck, 
  ArrowRight,
  Check
} from 'lucide-react';

const Membership = () => {
  useTitle('Get Membership');

  const mainFeatures = [
    "Video Consultation Primary Care",
    "Book Specialist Doctor Appointment",
    "10% Discount All Medicine",
    "10-40% Discount Lab Tests",
    "Home Sample Collection",
    "Diet & Nutrition Plan",
    "24/7 Care Support"
  ];

  const tiers = [
    { title: "Individual Plan", sub: "For 1 Person", features: mainFeatures, icon: ShieldCheck },
    { title: "Couple Plan", sub: "For 3 Person", features: mainFeatures, icon: ShieldCheck },
    { title: "Family Plan", sub: "For 5 Person", features: mainFeatures, icon: ShieldCheck },
    { title: "Joint Family Plan", sub: "For 10 Person", features: mainFeatures, icon: ShieldCheck },
    { title: "Personalized Care Plan", sub: "For 1 Person", features: ["Community Group Rural", "Community Group Urban", "Corporate Group", "10% Discount All Medicine", "10-40% Discount Lab Tests"], icon: ShieldCheck },
    { title: "Group Plan", sub: "Minimum 5", features: ["Community Group Rural", "Community Group Urban", "Corporate Group", "10% Discount All Medicine", "10-40% Discount Lab Tests"], icon: ShieldCheck },
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-fit mx-auto px-4">
            {tiers.map((tier, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-white to-[#F0F9FF] pt-8 pb-3 pl-6 pr-4 rounded-[5px] border border-slate-100 flex flex-col items-start gap-5 w-[300px] h-auto transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                  <tier.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] leading-tight">
                      {tier.title}
                    </h3>
                    <p className="text-slate-500 text-[14px] font-bold">{tier.sub}</p>
                  </div>
                  
                  <ul className="flex flex-col gap-1.5 mt-2 -ml-1">
                    {tier.features.slice(0, 4).map((feature, fIdx) => (
                      <li key={fIdx} className="text-[13px] text-slate-600 flex items-start gap-2">
                        <Check className="w-3 h-3 text-brand-600 mt-0.5 shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                    {tier.features.length > 4 && (
                      <li className="text-[12px] text-slate-400 italic">+ and more...</li>
                    )}
                  </ul>

                  <div className="flex items-center justify-between w-full mt-8">
                    <button className="flex items-center gap-1.5 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex items-center gap-1.5 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer">
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Membership;
