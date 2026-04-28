import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Find a Doctor', path: '/find-doctor' },
    { 
      name: 'Online Consult', 
      path: '#', 
      hasDropdown: true,
        subLinks: [
          { name: 'Primary Healthcare', path: '/primary-healthcare' },
          { name: 'Specialist Doctor Consult', path: '#' },
          { name: 'Second Opinion', path: '/second-opinion' },
          { name: 'Request Appointment', path: '/request-appointment' },
        ]
    },
    { 
      name: 'Medicine & Diagnostic Labs', 
      path: '#', 
      hasDropdown: true,
      subLinks: [
        { name: 'Easy Pharma', path: '#' },
        { name: 'Book Diagnostic Lab Tests', path: '#' },
        { name: 'Our Selected Labs', path: '#' },
        { name: 'Health Check Package', path: '/health-check' },
        { name: 'Online Lab Test Report', path: '/lab-report' },
      ]
    },
    { 
      name: 'Specialized Care', 
      path: '#', 
      hasDropdown: true, 
      isMega: true,
      columns: [
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
      ]
    },
    { 
      name: 'Safe Surgery', 
      path: '/safe-surgery', 
      hasDropdown: false 
    },
    { 
      name: 'Medical Tourism', 
      path: '#', 
      hasDropdown: true,
      subLinks: [
        { name: 'Home Country', path: '#' },
        { name: 'Health Destination', path: '#' },
        { name: 'Abroad Healthcare', path: '#' },
        { name: 'Booking Process', path: '#' },
      ]
    },
    { 
      name: 'Partner With Us', 
      path: '#', 
      hasDropdown: true,
      subLinks: [
        { name: 'Become a Doctor', path: '#' },
        { name: 'Become a Business Partner', path: '#' },
        { name: 'Become a Health Partner', path: '#' },
        { name: 'Become a Tele-health Agent', path: '/tele-health-agent' },
      ]
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#F0F9FF] via-[#F0F9FF] via-[62%] to-white border-b border-slate-100/50">
        <div className="max-w-[1200px] mx-auto px-4 h-9 flex items-center justify-between text-[12px] font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-brand-600">campaign</span>
            Welcome to Easy Healthcare Online Platform
          </div>
          <div className="flex items-center gap-4">
            <Link to="/membership" className="hover:text-brand-600 transition-colors cursor-pointer">Get Membership</Link>
            <Link to="/partner/ambulance" className="hover:text-brand-600 transition-colors cursor-pointer">Become an Ambulance Provider</Link>
            <Link to="/complaint-box" className="hover:text-brand-600 transition-colors cursor-pointer">Complaint Box</Link>
            <div className="flex items-center gap-3 bg-brand-600/5 px-3 py-1 rounded-full">
              <Link to="/login" className="hover:text-brand-600 transition-colors cursor-pointer font-bold">Login</Link>
              <span className="text-slate-300">|</span>
              <Link to="/signup" className="hover:text-brand-600 transition-colors cursor-pointer font-bold">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-[#F0F9FF] via-[#F0F9FF] via-[62%] to-white h-16 flex items-center w-full">
        <div className="w-full max-w-[1200px] mx-auto px-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 z-10">
            <img src="/assets/logo.png" alt="Easy Healthcare" className="h-10 w-auto object-contain" />
          </Link>

        {/* Navigation - Centered and slightly shifted left */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden xl:flex items-center h-full gap-0">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group h-full flex items-center">
              <Link 
                to={link.path} 
                className="px-1.5 py-2 text-[14px] font-medium text-slate-600 hover:text-brand-900 flex items-center gap-0 transition-colors whitespace-nowrap leading-none"
              >
                <span className="flex items-center">{link.name}</span>
                {link.hasDropdown && (
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:rotate-180 transition-transform leading-none mt-[1px]">expand_more</span>
                )}
              </Link>
              
              {/* Simple Dropdown Menu */}
              {link.subLinks && !link.isMega && (
                <div className="absolute top-full left-0 w-60 mt-[11px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white py-2 rounded-b-[3px] border-t-2 border-brand-600 border-x border-b border-slate-100">
                    {link.subLinks.map((sub, sIndex) => (
                      <Link 
                        key={sIndex}
                        to={sub.path}
                        className="block px-4 py-1.5 text-[13px] text-slate-600 hover:text-brand-600 transition-colors font-medium"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Mega Menu Dropdown */}
              {link.isMega && link.columns && (
                <div className="absolute top-full -left-[280px] w-[880px] mt-[11px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white p-8 rounded-b-[3px] grid grid-cols-4 gap-8 border-t-2 border-brand-600 border-x border-b border-slate-100">
                    {link.columns.map((column, colIndex) => (
                      <div key={colIndex} className="flex flex-col">
                        <h4 className="text-[12px] font-bold text-brand-900 mb-4 uppercase tracking-[0.1em] border-b border-slate-100 pb-2 flex items-center justify-between">
                          {column.title}
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-600/20"></span>
                        </h4>
                        <div className="flex flex-col gap-2.5">
                          {column.links.map((sub, sIndex) => (
                            <Link 
                              key={sIndex}
                              to={sub.path}
                              className="text-[13px] text-slate-500 hover:text-brand-600 transition-colors font-medium flex items-center"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Action Button */}
        <div className="flex items-center gap-2.5 z-10">
          <Link to="/get-ambulance" className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 rounded-[4px] text-[12px] font-bold hover:bg-red-100 transition-all border border-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ambulance"><path d="M10 10H6"/><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/><path d="M8 8v4"/><path d="M9 18h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
            Get Ambulance
          </Link>
          <button className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  </div>
);
};

export default Header;
