import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import useTitle from '../hooks/useTitle';

const TermsConditions = () => {
  useTitle('Terms & Conditions');

  return (
    <div className="min-h-screen login-bg flex flex-col items-center p-4 relative overflow-hidden font-manrope py-12">
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

      <main className="w-full max-w-[800px] z-10 mt-12">
        <div className="glass-card rounded-xl p-8 md:p-10 flex flex-col">
          <div className="mb-6 flex flex-col items-center">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4">
               <FileText className="w-6 h-6" />
            </div>
            <h1 className="text-[24px] font-bold text-on-surface-variant text-center">Terms & Conditions</h1>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-600 text-[15px] leading-relaxed">
            <p><strong>Effective Date:</strong> [Insert Date]</p>
            <p className="mt-4">This is a demo content block. Real content will be provided later.</p>
            <h3 className="text-brand-900 font-bold mt-6 mb-2">1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui.</p>
            <h3 className="text-brand-900 font-bold mt-6 mb-2">2. User Responsibilities</h3>
            <p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
            <h3 className="text-brand-900 font-bold mt-6 mb-2">3. Limitations of Liability</h3>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
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

export default TermsConditions;
