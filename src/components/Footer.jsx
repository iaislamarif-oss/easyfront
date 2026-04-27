import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'About EHCDC',
      links: [
        { name: 'Who We Are', path: '#' },
        { name: 'Contact Us', path: '#' },
        { name: 'Career In EHCDC', path: '#' },
        { name: 'News & Blog', path: '#' },
        { name: 'Complaint Box', path: '/complaint-box' },
        { name: 'Privacy Policy', path: '#' },
      ]
    },
    {
      title: 'Our Services',
      links: [
        { name: 'Find a Doctor', path: '/find-doctor' },
        { name: 'Specialist Doctor Consult', path: '#' },
        { name: 'Primary Healthcare', path: '/primary-healthcare' },
        { name: 'Medicine & Diagnostic Labs', path: '#' },
        { name: 'Book Diagnostic Lab Tests', path: '#' },
        { name: 'Health Check Package', path: '/health-check' },
        { name: 'Medical Tourism', path: '#' },
      ]
    },
    {
      title: 'Specialized Care',
      links: [
        { name: 'Men Care', path: '#' },
        { name: 'Women Care', path: '/women-care' },
        { name: 'Mother’s & Baby Care', path: '#' },
        { name: 'Child Care', path: '#' },
        { name: 'Diabetic Care', path: '/diabetic-care' },
        { name: 'Mental Healthcare', path: '/mental-healthcare' },
      ]
    },
    {
      title: 'Extended Care',
      links: [
        { name: 'Home Care Service', path: '/home-care' },
        { name: 'Safe Surgery', path: '/safe-surgery' },
        { name: 'Patient Advocacy', path: '#' },
        { name: 'Smart Home Care', path: '#' },
        { name: 'Patient Attendance', path: '#' },
        { name: 'Get Ambulance', path: '/get-ambulance' },
      ]
    },
    {
      title: 'Important Link',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms & Conditions', path: '#' },
        { name: 'Order Policy', path: '#' },
        { name: 'Refund Policy', path: '#' },
        { name: 'Fake & IP Policy', path: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#F0F9FF] via-[#F0F9FF] via-[62%] to-white border-t border-slate-200/60 pt-10 pb-6">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 pb-10 border-b border-slate-200/60">
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
          <div className="flex items-center gap-6 text-[12px] text-slate-400">
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
