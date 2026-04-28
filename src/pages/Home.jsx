import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Apple, Activity, Baby, Brain, Heart, Video } from 'lucide-react';
import useTitle from '../hooks/useTitle';

const Home = () => {
  useTitle('Home');

  const services = [
    {
      id: 1,
      title: "Specialized Doctor Appointment Booking",
      desc: "Online doctor appointment booking is a web and mobile app-based system that allows patients to book, reschedule, or cancel appointments online anytime, from any location. We are helping patients select a specialist doctor for their health problems. We aim to bridge the gap between patients and healthcare providers, ensuring better accessibility to healthcare services.",
      image: "/assets/homeservice/bookappoitnment.png"
    },
    {
      id: 2,
      title: "Primary Care",
      desc: "Primary care is a general and essential healthcare system that provides accessible, affordable care to individuals and families. To bring quality, comprehensive care closest to where people live by integrating digital tools to ensure seamless, coordinated care and better decision-making. Quicker communication between patients and care teams to enable faster diagnosis and timely treatment for better recover .We are providing remote consultations, managing chronic conditions, fostering continuous care, and enabling rapid, equitable access to health information.",
      image: "/assets/homeservice/primaryhealthcare.png"
    },
    {
      id: 3,
      title: "Medical Tourism",
      desc: "Medical Tour services facilitate advanced healthcare, in the home country and abroad, offering comprehensive packages. Reviewing medical history and providing tailored treatment plans with cost estimates. Connecting patients with accredited best hospitals, diagnostic, and specialist doctors. Facilitating procedures and coordinating follow-up care, including post-treatment recovery and Logistics & Travel Assistance.",
      image: "/assets/homeservice/medicaltrusom.png"
    },
    {
      id: 4,
      title: "Tele-Healthcare",
      desc: "Tele-healthcare uses digital telecommunications and Healthcare technology to Provide Patient care, prevention, and health education services. Real-time, video-based consultations for primary care and specialty doctor consultations. Remote patients are being monitored for chronic condition management. Patient is sharing medical information (images or lab results) with a physician for follow-up and a second opinion. Patients are connecting with video consultations with a general physician and specialist without traveling anywhere, anytime, and get cost-effective healthcare.",
      image: "/assets/homeservice/tele-medicine.png"
    },
    {
      id: 5,
      title: "Home Care",
      desc: "Home healthcare services provide medical care in a patient's home. Professional nurses provide wound care, medication management, injection push, and monitor vital signs. Doctor home visits to medical consultations for diagnosis and treatment planning without traveling to a hospital. Physiotherapy & Rehabilitation, Chronic Disease management, and lab sample collection at home, Patient Care attendant (PCA) support. Professional care at home often leads to faster recuperation and better clinical outcomes, reduces the need for hospital visits, and provides tailored, flexible care plans.",
      image: "/assets/homeservice/homecare.png"
    },
    {
      id: 6,
      title: "Diabetic Care",
      desc: "Online Comprehensive diabetic care services offer telehealth consultations with specialists, dietitians, and diabetes educators. Personalized care plans for individual needs and health goals. Continuous remote monitoring of blood sugar levels to manage diabetes. Home-based diagnostic tests and medicine delivery services. These services aim to make diabetes management more accessible and affordable, reducing the need for travel while improving long-term health outcomes",
      image: "/assets/homeservice/diabeticcare.png"
    },
    {
      id: 7,
      title: "Safe Surgery",
      desc: "Easy Healthcare provides end-to-end support for your surgical journey. From finding the right specialist to selecting the best hospital. Post-operative care at home, online follow-up, pre-operative care & Cost planning, Patient care attendant (PCA), financial aid & assistance, pick-and-drop, and logistics support. Connect with affordable surgery packages, the best specialists, and top-rated hospitals for successful surgery and better recovery. Our expert team ensures a safe, transparent, and comfortable surgery experience for every patient.",
      image: "/assets/homeservice/safesurgery.png"
    },
    {
      id: 8,
      title: "Online Ambulance Booking",
      desc: "Book online Ambulance Service anywhere, 24/7 emergency medical care, patient transfers, long-distance transport, and specialized medical care. Our Ambulance services are faster, more reliable, and more affordable for emergency or non-emergency care for you.",
      image: "/assets/homeservice/onlineambulance.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-manrope overflow-hidden">
      {/* 1. HERO SECTION & SERVICES AREA with Login-bg */}
      <div className="login-bg relative pb-12">
        {/* Blank White Hero Placeholder */}
        <section className="h-[400px] w-full bg-white relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 hero-dots opacity-20"></div>
        </section>

        {/* Services Timeline */}
        <main className="max-w-[1200px] mx-auto w-full px-4 z-10 mt-16">
          <div className="flex flex-col glass-card rounded-[10px] border border-white/50 overflow-hidden">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`p-8 md:p-12 flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse bg-white/20' : 'md:flex-row'} items-center gap-8 md:gap-16 border-b border-white/50 last:border-b-0 group`}
              >
                <div className="w-full md:w-1/2 h-[240px] md:h-[300px] rounded-[8px] overflow-hidden shrink-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <h2 className="text-[20px] md:text-[22px] font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] mb-1">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-[14.5px] leading-relaxed text-justify">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Background Glows (Inside the login-bg section only) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#89ceff]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#7bf9cb]/10 rounded-full blur-[120px]"></div>
        </div>
      </div>

      {/* 2. SPECIALIZED CARE SECTION - Pure White Background, No Glows */}
      <section className="bg-white pt-12 pb-4 relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-[32px] md:text-[40px] font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] w-fit">
              Specialized Care
            </h2>
            <button className="flex items-center gap-2 transition-all font-bold text-[14px] group cursor-pointer border border-brand-600/20 px-5 py-2 rounded-[5px] hover:bg-brand-600/5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B]">
                See All Specialized Care
              </span>
              <ArrowRight className="w-4 h-4 text-[#008E6B] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Men & Women Care", icon: Video, desc: "Comprehensive healthcare for adults." },
              { title: "Diet & Nutrition", icon: Video, desc: "Expert guidance for healthy eating." },
              { title: "Chronic Disease", icon: Video, desc: "Long-term management of conditions." },
              { title: "Skin Care", icon: Video, desc: "Advanced dermatological treatments." },
              { title: "Mental Healthcare", icon: Video, desc: "Professional support for mind." },
            ].map((care, index) => (
              <div 
                key={index} 
                className="bg-primary p-8 rounded-[5px] border border-white flex flex-col items-start gap-4 relative overflow-hidden h-[260px]"
              >
                <div className="relative z-10 w-10 h-10 rounded-lg bg-white border border-white flex items-center justify-center text-primary shrink-0">
                  <care.icon className="w-5 h-5" />
                </div>
                
                <div className="relative z-10 mt-auto w-full flex flex-col gap-1">
                  <h3 className="font-bold text-[14px] text-white leading-tight">
                    {care.title}
                  </h3>
                  <button className="w-full flex items-center justify-start gap-1.5 text-white font-bold text-[13px] cursor-pointer py-1 bg-transparent hover:opacity-80 transition-opacity group">
                    Consult Now
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Check Packages Section */}
      <section className="bg-white pt-6 pb-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-[32px] md:text-[40px] font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] w-fit">
              Health Check Packages
            </h2>
            <Link to="/health-check" className="flex items-center gap-2 transition-all font-bold text-[14px] group cursor-pointer border border-brand-600/20 px-5 py-2 rounded-[5px] hover:bg-brand-600/5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B]">
                See All Health Check Packages
              </span>
              <ArrowRight className="w-4 h-4 text-[#008E6B] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "General Health Checkup", title: "General Health Checkup", sub: "For Men (Above 40)", icon: Heart },
              { category: "Executive Health Checkup", title: "Executive Health Checkup", sub: "For Men (Above 40)", icon: Heart },
              { category: "Whole Body Checkup", title: "Whole Body Checkup", sub: "For Men (Above 40)", icon: Heart },
              { category: "Breast Cancer", title: "Breast Cancer", sub: "For Women", icon: Heart },
            ].map((pkg, index) => (
              <div 
                key={index} 
                className="bg-primary p-8 rounded-[5px] border border-white flex flex-col items-start gap-4 relative overflow-hidden h-[260px]"
              >
                <div className="relative z-10 w-10 h-10 rounded-lg bg-white border border-white flex items-center justify-center text-brand-600 shrink-0">
                  <pkg.icon className="w-5 h-5" />
                </div>
                
                <div className="relative z-10 mt-auto w-full flex flex-col gap-1">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[16px] text-white leading-tight">
                      {pkg.title}
                    </h3>
                    <p className="text-white text-[13px] font-medium">{pkg.sub}</p>
                  </div>

                  <Link to="/health-check" className="w-full flex items-center justify-start gap-1.5 text-white font-bold text-[13px] cursor-pointer py-1 bg-transparent hover:opacity-80 transition-opacity group">
                    View Package
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Membership Section */}
      <section className="bg-white pt-8 pb-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-[32px] md:text-[40px] font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B] w-fit">
              Membership
            </h2>
            <Link to="/membership" className="flex items-center gap-2 transition-all font-bold text-[14px] group cursor-pointer border border-brand-600/20 px-5 py-2 rounded-[5px] hover:bg-brand-600/5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B]">
                See All Membership
              </span>
              <ArrowRight className="w-4 h-4 text-[#008E6B] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Individual Plan", sub: "For 1 Person", icon: ShieldCheck, features: ["Video Consultation", "Specialist Booking", "10% Medicine Discount"] },
              { title: "Couple Plan", sub: "For 3 Person", icon: ShieldCheck, features: ["Video Consultation", "Specialist Booking", "10% Medicine Discount"] },
              { title: "Family Plan", sub: "For 5 Person", icon: ShieldCheck, features: ["Video Consultation", "Specialist Booking", "10% Medicine Discount"] },
              { title: "Group Plan", sub: "For 10 Person", icon: ShieldCheck, features: ["Video Consultation", "Specialist Booking", "10% Medicine Discount"] },
            ].map((tier, index) => (
              <div 
                key={index} 
                className="bg-primary p-8 rounded-[5px] border border-white flex flex-col items-start gap-6 relative overflow-hidden"
              >
                <div className="relative z-10 w-12 h-12 rounded-xl bg-white border border-white flex items-center justify-center text-primary shrink-0">
                  <tier.icon className="w-6 h-6" />
                </div>
                
                <div className="relative z-10 flex flex-col gap-1">
                  <h3 className="font-bold text-[18px] text-white leading-tight">
                    {tier.title}
                  </h3>
                  <p className="text-white text-[13px] font-bold uppercase tracking-wider">{tier.sub}</p>
                </div>

                <ul className="relative z-10 flex flex-col gap-2 w-full">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-[13px] text-white flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-auto w-full pt-4">
                  <Link to="/membership" className="w-full flex items-center justify-start gap-1.5 text-white font-bold text-[13px] cursor-pointer py-1 bg-transparent hover:opacity-80 transition-opacity group">
                    Get Membership
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Platform Section */}
      <section className="login-bg py-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 z-10">
          <div className="glass-card p-10 md:p-16 rounded-[20px] border border-white/60">
            <h2 className="text-[28px] md:text-[36px] font-black text-brand-900 mb-2 leading-tight">
              Stay Healthy with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B]">“Easy Healthcare”</span> online Care platform
            </h2>
            <p className="text-brand-600 font-bold text-[18px] mb-8 italic">We bring care to health</p>
            
            <div className="text-slate-600 text-[16px] leading-relaxed text-justify">
              <p>
                Easy Healthcare is the largest online healthcare platform in Bangladesh. We have built a real-time integrated approach healthcare platform for all your healthcare solutions. Easy Healthcare, our goal is to make healthcare accessible, understandable and affordable in Bangladesh. Patient / Customer centricity is the core of our values. Our team of highly trained and experienced doctors, health professional, phlebotomists and pharmacists looks into each order to give you a fulfilling experience. Visit our online healthcare platform now, and avail online healthcare service and Product buy at an affordable or at a best discount price Stay Healthy!
              </p>
            </div>
          </div>
        </div>

        {/* Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-[#89ceff]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#7bf9cb]/10 rounded-full blur-[120px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
