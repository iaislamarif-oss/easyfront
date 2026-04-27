import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { 
  Smartphone, 
  User, 
  Mail, 
  MapPin, 
  ArrowLeft
} from 'lucide-react';

const TeleHealthAgent = () => {
  useTitle('Become a Tele-health Agent');

  return (
    <div className="min-h-screen login-bg flex items-center justify-center p-4 relative overflow-hidden font-manrope">
      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[16px] z-20 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {/* Background Decorative Element */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#89ceff]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#7bf9cb]/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Form Container */}
      <main className="w-full max-w-[600px] z-10">
        <div className="glass-card rounded-xl p-8 md:p-10 flex flex-col items-center">
          <div className="mb-8 text-center">
            <h1 className="text-[24px] font-bold text-slate-900 mb-2">Tele-health Agent Application</h1>
            <p className="text-[14px] text-slate-500 font-medium">Join our network and help bridge the gap in healthcare</p>
          </div>

          {/* Application Form */}
          <form className="w-full flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="relative group">
                <label className="block text-[14px] font-bold text-slate-700 mb-2 ml-1" htmlFor="fullName">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 w-5 h-5" />
                  <input 
                    className="inset-glass w-full pl-12 pr-4 py-2 rounded-lg text-[14px] text-slate-900 border border-slate-200 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all" 
                    id="fullName" 
                    placeholder="Enter full name" 
                    required 
                    type="text"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative group">
                <label className="block text-[14px] font-bold text-slate-700 mb-2 ml-1" htmlFor="phone">Phone Number</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 w-5 h-5" />
                  <input 
                    className="inset-glass w-full pl-12 pr-4 py-2 rounded-lg text-[14px] text-slate-900 border border-slate-200 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all" 
                    id="phone" 
                    placeholder="Enter phone number" 
                    required 
                    type="tel"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Email Address */}
              <div className="relative group">
                <label className="block text-[14px] font-bold text-slate-700 mb-2 ml-1" htmlFor="email">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 w-5 h-5" />
                  <input 
                    className="inset-glass w-full pl-12 pr-4 py-2 rounded-lg text-[14px] text-slate-900 border border-slate-200 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all" 
                    id="email" 
                    placeholder="Enter email address" 
                    required 
                    type="email"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="relative group">
                <label className="block text-[14px] font-bold text-slate-700 mb-2 ml-1" htmlFor="location">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 w-5 h-5" />
                  <input 
                    className="inset-glass w-full pl-12 pr-4 py-2 rounded-lg text-[14px] text-slate-900 border border-slate-200 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all" 
                    id="location" 
                    placeholder="City/area" 
                    required 
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button className="primary-gradient w-full py-2 mt-4 rounded-lg text-[16px] font-bold text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none" type="submit">
              Submit Application
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TeleHealthAgent;
