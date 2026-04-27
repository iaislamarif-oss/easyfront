import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'About Us',
      links: [
        { name: 'Who We Are', path: '/who-we-are' },
        { name: 'Become a Business Partner', path: '#' },
        { name: 'Become a Health partner', path: '#' },
        { name: 'Become an Ambulance Provider', path: '#' },
        { name: 'Contact us', path: '#' },
      ]
    },
    {
      title: 'Important Link',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms & Conditions', path: '#' },
        { name: 'Order Policy', path: '#' },
        { name: 'Refund Policy', path: '#' },
        { name: 'IP Use Policy', path: '#' },
      ]
    },
    {
      title: 'Customer Link',
      links: [
        { name: 'Payment Method', path: '#' },
        { name: 'Portal Use Guide', path: '#' },
        { name: 'Virtual Support', path: '#' },
        { name: 'AI Assistant', path: '#' },
        { name: 'Forgot Password', path: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#F0F9FF] via-[#F0F9FF] via-[62%] to-white border-t border-slate-200/60 pt-10 pb-6">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-10 pb-10 border-b border-slate-200/60 max-w-[800px]">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-[13px] font-bold uppercase tracking-[0.1em] text-brand-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-3 bg-brand-600 rounded-full"></span>
                {column.title}
              </h4>
              <div className="flex flex-col gap-3">
                {column.links.map((link, lIndex) => (
                  <Link 
                    key={lIndex} 
                    to={link.path} 
                    className="flex items-center gap-2 text-[13.5px] text-slate-500 hover:text-brand-600 transition-colors group"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-slate-400">
            © 2022-2026 <span className="font-bold text-slate-600">Easy Healthcare Diagnostic & Consultation Center Online Platform</span>
          </p>
          <div className="flex items-center gap-1.5 text-[12px] text-slate-400">
            Technical Support By, 
            <a href="https://www.linkedin.com/in/himayet-ali-joy" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-600 hover:underline transition-colors">
              MD Himayet Ali Joy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
