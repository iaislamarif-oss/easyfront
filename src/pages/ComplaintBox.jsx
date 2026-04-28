import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ArrowLeft, User, MessageSquare } from 'lucide-react';
import useTitle from '../hooks/useTitle';

const ComplaintBox = () => {
  useTitle('Complaint Box');

  return (
    <div className="min-h-screen login-bg flex items-center justify-center p-4 relative overflow-hidden font-manrope py-12">
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

      {/* Complaint Container */}
      <main className="w-full max-w-[640px] z-10">
        <div className="glass-card rounded-xl p-8 md:p-10 flex flex-col items-center">
          {/* Complaint Form */}
          <form className="w-full flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name Field */}
              <div className="relative group">
                <label className="block text-[14px] font-medium text-on-primary-fixed-variant mb-2 ml-1" htmlFor="name">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 w-5 h-5" />
                  <input 
                    className="inset-glass w-full pl-12 pr-4 py-2.5 rounded-lg text-[14px] text-on-surface border border-slate-300 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your full name" 
                    required 
                    type="text"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <label className="block text-[14px] font-medium text-on-primary-fixed-variant mb-2 ml-1" htmlFor="phone">Phone Number</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 w-5 h-5" />
                  <input 
                    className="inset-glass w-full pl-12 pr-4 py-2.5 rounded-lg text-[14px] text-on-surface border border-slate-300 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    required 
                    type="tel"
                  />
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="relative group">
              <label className="block text-[14px] font-medium text-on-primary-fixed-variant mb-2 ml-1" htmlFor="subject">Complaint Subject</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 w-5 h-5" />
                <input 
                  className="inset-glass w-full pl-12 pr-4 py-2.5 rounded-lg text-[14px] text-on-surface border border-slate-300 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all" 
                  id="subject" 
                  name="subject" 
                  placeholder="Briefly describe the issue" 
                  required 
                  type="text"
                />
              </div>
            </div>

            {/* Complaint Details */}
            <div className="relative group">
              <label className="block text-[14px] font-medium text-on-primary-fixed-variant mb-2 ml-1" htmlFor="details">Complaint Details</label>
              <div className="relative">
                <textarea 
                  className="inset-glass w-full p-4 rounded-lg text-[14px] text-on-surface border border-slate-300 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all min-h-[120px] resize-y" 
                  id="details" 
                  name="details" 
                  placeholder="Please provide all relevant details here..." 
                  required 
                ></textarea>
              </div>
            </div>

            {/* Action Button */}
            <button className="primary-gradient w-full py-3 mt-4 rounded-lg text-[16px] font-bold text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none" type="submit">
              Submit Complaint
            </button>
          </form>
        </div>
      </main>

      {/* Visual Polish Image */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        <img 
          alt="" 
          className="w-full h-full object-cover opacity-10" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfgq-N4vQNM7b2sRGwH24RO538fqY3gg3GaVEA9cVgk3mGem4wd89nRz5ab84Lt5Sb71CHIBdF0ngAFpsrIZAG-BXHmpNjZZvSueBaUlOeGbEripj6AheOFv8CyaCHv5q-dgX8pQyDP3Syc623926e8nfpAQ7z5oFfTvrznmVSJT3H3Gzy479RLU9az_FTmxSeFSoGnCH2OkAmK4Otu2640wLrqqj4xARyPVgxhFm_m_TVfa65WZtHc8m-ZQ1eWGZVDI64I7aYSyQ" 
        />
      </div>
    </div>
  );
};

export default ComplaintBox;
