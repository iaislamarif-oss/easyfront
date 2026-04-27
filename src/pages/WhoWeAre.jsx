import React from 'react';
import { ShieldCheck, Target } from 'lucide-react';
import useTitle from '../hooks/useTitle';

const WhoWeAre = () => {
  useTitle('Who We Are');


  return (
    <div className="flex flex-col min-h-screen bg-white font-manrope">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F0F9FF] to-white pt-12 pb-16 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
          <h1 className="text-[36px] md:text-[48px] font-black text-brand-900 mb-6 leading-tight">
            We make healthcare accessible, <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B]">Understandable, and Affordable</span>
          </h1>
        </div>
        <div className="absolute inset-0 hero-dots opacity-20"></div>
      </section>

      {/* About Section */}
      <section className="pt-1 pb-4 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="glass-card p-10 md:p-16 rounded-[20px] border border-slate-100/60 shadow-none bg-slate-50/30">
            <div className="text-slate-600 text-[17px] leading-relaxed text-justify">
              <p>
                <span className="text-[20px] font-bold text-brand-900 block mb-4">The largest online healthcare platform in Bangladesh</span>
                Easyhealthcare.com.bd brings you in an online healthcare platform, which can be accessed for all your healthcare needs. We are trying to make healthcare a Hassel-free experience for you. We have built a real-time integrated approach healthcare platform for all your healthcare solutions that are integrated services - Online Doctor Appointments at near you & online healthcare consultation. All Medicine (allopathic, ayurvedic, homeopathic), vitamins & nutrition supplements and other health-related device & products delivered at home. Lab tests too that in the comfort of your home. Home healthcare services. Essential Health check and Expert hand Surgery Packages, Individualized healthcare plan, Financial Aid & Assistant s for healthcare, Patient Advocates, Personal Care Assistants (PCA) and pick & drop down support, Online Ambulance Booking. Mental healthcare at home and Holistic healthcare approach. Authentic Healthcare related information and Journals. International Healthcare services that too get in the comfort of your home or in a foreign country. We make your medical trip in home country or abroad simple and stress-free with full support and take care of everything that your need for healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="login-bg py-16 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="glass-card p-10 rounded-2xl border border-white/60">
            <div className="w-12 h-12 rounded-xl bg-brand-600/10 flex items-center justify-center text-brand-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-[28px] font-bold text-brand-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-[16px] leading-relaxed">
              To revolutionize healthcare in Bangladesh by providing a seamless, digital-first experience that prioritizes patient needs, clinical excellence, and absolute transparency in every service we offer.
            </p>
          </div>
          <div className="glass-card p-10 rounded-2xl border border-white/60">
            <div className="w-12 h-12 rounded-xl bg-brand-600/10 flex items-center justify-center text-brand-600 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-[28px] font-bold text-brand-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-[16px] leading-relaxed">
              To become the most trusted healthcare companion for every family in Bangladesh, ensuring that quality medical care is never more than a click away.
            </p>
          </div>
        </div>
        {/* Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[10%] right-[5%] w-[30%] h-[40%] bg-[#89ceff]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[40%] bg-[#7bf9cb]/10 rounded-full blur-[100px]"></div>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;
