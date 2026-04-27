import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Lock, Eye, ArrowRight, ArrowLeft } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen login-bg flex items-center justify-center p-4 relative overflow-hidden font-manrope">
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

      {/* Login Container */}
      <main className="w-full max-w-[440px] z-10">
        <div className="glass-card rounded-xl p-8 md:p-10 flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center">
            <p className="text-[18px] text-on-surface-variant">Welcome Back</p>
          </div>

          {/* Login Form */}
          <form className="w-full flex flex-col gap-4">
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

            {/* Password Field */}
            <div className="relative group">
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="text-[14px] font-medium text-on-primary-fixed-variant" htmlFor="password">Password</label>
                <a className="text-[14px] text-on-tertiary-container hover:underline transition-all font-medium" href="#">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 w-5 h-5" />
                <input 
                  className="inset-glass w-full pl-12 pr-12 py-2.5 rounded-lg text-[14px] text-on-surface border border-slate-300 focus:border-brand-600 focus:ring-0 focus:outline-none transition-all" 
                  id="password" 
                  name="password" 
                  placeholder="Enter your password" 
                  required 
                  type="password"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-600 hover:opacity-80 transition-opacity cursor-pointer" type="button">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Button */}
            <button className="primary-gradient w-full py-2.5 mt-6 rounded-lg text-[16px] font-bold text-white hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none" type="submit">
              Sign In
            </button>

            {/* Signup Prompt */}
            <div className="mt-8 text-center">
              <p className="text-[14px] text-on-surface-variant">
                Don't have an account? 
                <Link className="text-on-tertiary-container font-bold hover:underline transition-all ml-1" to="#">Join the Sanctuary</Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer / Credits (Removed) */}
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

export default Login;
