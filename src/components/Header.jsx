import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState(null);

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
    { name: 'Get Ambulance', path: '/get-ambulance' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#F0F9FF] via-[#F0F9FF] via-[62%] to-white border-b border-slate-100/50">
        <div className="max-w-[1200px] mx-auto px-4 h-9 flex items-center justify-between text-[11px] sm:text-[12px] font-medium text-slate-500">
          <div className="flex items-center gap-1 sm:gap-2 truncate mr-2">
            <span className="hidden sm:inline material-symbols-outlined text-[18px] text-brand-600">campaign</span>
            <span className="truncate">Welcome Easy Healthcare Online Platform</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-4">
              <Link to="/membership" className="hidden sm:block hover:text-brand-600 transition-colors cursor-pointer whitespace-nowrap">Get Membership</Link>
              <Link to="/partner/ambulance" className="hidden sm:block hover:text-brand-600 transition-colors cursor-pointer whitespace-nowrap">Become an Ambulance Provider</Link>
              <Link to="/complaint-box" className="hidden sm:block hover:text-brand-600 transition-colors cursor-pointer whitespace-nowrap">Complaint Box</Link>
            </div>
            <div className="flex items-center gap-3 bg-brand-600/5 px-3 py-1 rounded-full">
              <Link to="/login" className="hover:text-brand-600 transition-colors cursor-pointer font-bold">Login</Link>
              <span className="text-slate-300">|</span>
              <Link to="/signup" className="hover:text-brand-600 transition-colors cursor-pointer font-bold">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-[#F0F9FF] via-[#F0F9FF] via-[62%] to-white h-16 flex items-center w-full shadow-none">
        <div className="w-full max-w-[1200px] mx-auto px-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 z-10">
            <img src="/assets/logo.png" alt="Easy Healthcare" className="h-10 w-auto object-contain" />
          </Link>

        {/* Desktop Navigation */}
        <div className="flex-1 hidden xl:flex justify-center">
          <nav className="flex items-center h-full gap-0">
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

      {/* Action Buttons */}
        <div className="flex items-center gap-2.5 z-10">
          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-brand-600 cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Drawer */}
    <div className={`fixed inset-0 z-50 xl:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Menu Content */}
      <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <span className="font-bold text-brand-900">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 hover:bg-slate-200 rounded-full transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <div key={index} className="border-b border-slate-50 last:border-0">
                  <div 
                    className="flex items-center justify-between px-6 py-2.5 transition-colors cursor-pointer"
                    onClick={() => {
                      if (!link.hasDropdown) {
                        setIsMobileMenuOpen(false);
                      } else {
                        setMobileActiveTab(mobileActiveTab === index ? null : index);
                      }
                    }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-[13.5px] font-semibold text-slate-700"
                      onClick={(e) => link.hasDropdown && e.preventDefault()}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <span className={`material-symbols-outlined text-[18px] text-slate-400 transition-transform ${mobileActiveTab === index ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    )}
                  </div>

                  {/* Mobile Dropdown Content */}
                  {link.hasDropdown && mobileActiveTab === index && (
                    <div className="bg-slate-50/50 py-1">
                      {/* Normal Dropdown */}
                      {link.subLinks && link.subLinks.map((sub, sIndex) => (
                        <Link
                          key={sIndex}
                          to={sub.path}
                          className="block px-10 py-1.5 text-[12.5px] text-slate-600 font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}

                      {/* Mega Menu Style for Mobile */}
                      {link.isMega && link.columns && link.columns.map((column, cIndex) => (
                        <div key={cIndex} className="mb-2 last:mb-0">
                          <div className="px-10 py-1 text-[11px] font-bold text-brand-600 uppercase tracking-wider">
                            {column.title}
                          </div>
                          {column.links.map((sub, sIndex) => (
                            <Link
                              key={sIndex}
                              to={sub.path}
                              className="block px-12 py-1.5 text-[12.5px] text-slate-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Extra Top Bar Links for Mobile */}
              <div className="mt-2">
                <Link to="/membership" className="block px-6 py-3 text-[13.5px] font-semibold text-slate-700 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Membership
                </Link>
                <Link to="/partner/ambulance" className="block px-6 py-3 text-[13.5px] font-semibold text-slate-700 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Become an Ambulance Provider
                </Link>
                <Link to="/complaint-box" className="block px-6 py-3 text-[13.5px] font-semibold text-slate-700 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Complaint Box
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="flex flex-col gap-3 text-center text-[12px] text-slate-400">
              © 2026 Easy Healthcare Online Platform
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Header;

