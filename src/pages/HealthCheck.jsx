import React from 'react';
import useTitle from '../hooks/useTitle';
import { 
  Heart, 
  ArrowRight
} from 'lucide-react';

const HealthCheck = () => {
  useTitle('Health Check Packages');

  const packages = [
    // General Health Checkup
    { category: "General Health Checkup", title: "General Health Checkup", sub: "For Men (Above 40)", icon: Heart },
    { category: "General Health Checkup", title: "General Health Checkup", sub: "For Men (Below 40)", icon: Heart },
    { category: "General Health Checkup", title: "General Health Checkup", sub: "For Women (Above 40)", icon: Heart },
    { category: "General Health Checkup", title: "General Health Checkup", sub: "For Women (Below 40)", icon: Heart },
    
    // Executive Health Checkup
    { category: "Executive Health Checkup", title: "Executive Health Checkup", sub: "For Men (Above 40)", icon: Heart },
    { category: "Executive Health Checkup", title: "Executive Health Checkup", sub: "For Men (Below 40)", icon: Heart },
    { category: "Executive Health Checkup", title: "Executive Health Checkup", sub: "For Women (Above 40)", icon: Heart },
    { category: "Executive Health Checkup", title: "Executive Health Checkup", sub: "For Women (Below 40)", icon: Heart },
    
    // Whole Body Checkup
    { category: "Whole Body Checkup", title: "Whole Body Checkup", sub: "For Men (Above 40)", icon: Heart },
    { category: "Whole Body Checkup", title: "Whole Body Checkup", sub: "For Men (Below 40)", icon: Heart },
    { category: "Whole Body Checkup", title: "Whole Body Checkup", sub: "For Women (Above 40)", icon: Heart },
    { category: "Whole Body Checkup", title: "Whole Body Checkup", sub: "For Women (Below 40)", icon: Heart },
    
    // Breast Cancer Screening
    { category: "Breast Cancer Screening", title: "Breast Cancer Screening", sub: "For Women (Above 40)", icon: Heart },
    { category: "Breast Cancer Screening", title: "Breast Cancer Screening", sub: "For Women (Below 40)", icon: Heart },
    
    // Heart Checkup
    { category: "Heart Checkup", title: "Heart Checkup", sub: "For Men", icon: Heart },
    { category: "Heart Checkup", title: "Heart Checkup", sub: "For Women", icon: Heart },
    
    // Child Care
    { category: "Child Care", title: "Child Care", sub: "For Girl/Boy", icon: Heart },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-manrope">
      {/* Hero Section */}
      <section className="bg-white min-h-[300px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-dots opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Hero content placeholder */}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white pb-24 relative overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[1200px] z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto">
            {packages.map((pkg, index) => (
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
                    View Package
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

export default HealthCheck;
