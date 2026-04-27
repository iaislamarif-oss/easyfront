import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'About Us',
      links: [
        { name: 'Who We Are', path: '#' },
        { name: 'Become a Business Partner', path: '#' },
        { name: 'Become a Health partner', path: '#' },
        { name: 'Become an Ambulance Provider', path: '#' },
        { name: 'Contact us', path: '#' },
      ]
    },
    {
      title: 'Our Service',
      links: [
        { name: 'Find a Doctor', path: '/find-doctor' },
        { name: 'Online Consult', path: '#' },
        { name: 'Medicine & Diagnostic Lab', path: '#' },
        { name: 'Specialized Care', path: '#' },
        { name: 'Safe Surgery', path: '/safe-surgery' },
        { name: 'Medical Tourism', path: '#' },
        { name: 'Get Ambulance', path: '/get-ambulance' },
      ]
    },
    {
      title: 'Family Care',
      links: [
        { name: 'Men Care', path: '#' },
        { name: 'Women Care', path: '/women-care' },
        { name: 'Mother’s & Baby Care', path: '#' },
        { name: 'Child Care', path: '#' },
      ]
    },
    {
      title: 'Chronic Care',
      links: [
        { name: 'Cancer Care', path: '#' },
        { name: 'Diabetic Care', path: '/diabetic-care' },
        { name: 'Heart Care', path: '#' },
        { name: 'Skin Care', path: '#' },
      ]
    },
    {
      title: 'Wellbeing',
      links: [
        { name: 'Mental Healthcare', path: '/mental-healthcare' },
        { name: 'Fertility Care', path: '#' },
        { name: 'Diet & Nutrition', path: '#' },
        { name: 'Eye Care', path: '#' },
      ]
    },
    {
      title: 'Extended Care',
      links: [
        { name: 'Home Care Service', path: '/home-care' },
        { name: 'Patient Advocacy', path: '#' },
        { name: 'Smart Home Care', path: '#' },
        { name: 'Patient Attendance', path: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#F0F9FF] via-[#F0F9FF] via-[62%] to-white border-t border-slate-200/60 pt-10 pb-6">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 pb-10 border-b border-slate-200/60">
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
