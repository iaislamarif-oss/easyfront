import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Activity, Heart, Video, Apple, Brain } from 'lucide-react';
import useTitle from '../hooks/useTitle';
import GeneralHealthIcon from '../assets/Generalhealth.svg';
import HeartCareIcon from '../assets/Heartcare.svg';
import ExecutiveCheckIcon from '../assets/Excutivecheck.svg';
import BreastCancerIcon from '../assets/Brestcancer.svg';

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
                  <h2 className="text-[20px] md:text-[22px] font-black leading-tight text-[#1e3d36] mb-1">
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

      {/* 2. SPECIALISED CARE SECTION - Colorful Grid Redesign */}
      <section className="bg-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-[#1e3d36] text-[36px] md:text-[52px] font-black leading-tight mb-6">
                Specialized Care
              </h2>
              <p className="text-slate-500 text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-md">
                We provide the highest quality healthcare services with advanced technology and expert doctors to ensure your well-being.
              </p>
              <button className="px-10 py-3 rounded-full border border-teal-100 text-teal-600 font-bold text-[16px] hover:bg-teal-50 transition-all shadow-sm cursor-pointer">
                View All Care
              </button>
            </div>

            {/* Right Grid Content - Staggered 2-Column Layout */}
            <div className="w-full lg:w-7/12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto lg:mx-0">
                {/* Column 1 */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {/* Card 1: Family Care (Top Aligned) */}
                  <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-[20px] p-4 flex flex-col justify-between h-[130px] md:h-[150px] shadow-lg shadow-orange-500/20 relative group cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-black text-[14px] md:text-[15px] leading-tight">
                        Family <br /> Care
                      </h3>
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm">
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Users className="w-8 h-8 text-white/90" />
                    </div>
                  </div>

                  {/* Card 2: Extended Care (Bottom Aligned with Chronic) */}
                  <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-[20px] p-4 flex flex-col justify-between h-[95px] md:h-[110px] shadow-lg shadow-blue-500/20 relative group cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-black text-[13px] md:text-[14px] leading-tight">
                        Extended <br /> Care
                      </h3>
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-blue-500 shadow-sm">
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Heart className="w-6 h-6 text-white/90" />
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {/* Card 3: Wellbeing Care (Top Aligned with Family) */}
                  <div className="bg-gradient-to-br from-[#4ade80] to-[#22c55e] rounded-[20px] p-4 flex flex-col justify-between h-[95px] md:h-[110px] shadow-lg shadow-green-500/20 relative group cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-black text-[13px] md:text-[14px] leading-tight">
                        Wellbeing <br /> Care
                      </h3>
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-green-500 shadow-sm">
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Apple className="w-6 h-6 text-white/90" />
                    </div>
                  </div>

                  {/* Card 4: Chronic Disease (Bottom Aligned) */}
                  <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-[20px] p-4 flex flex-col justify-between h-[130px] md:h-[150px] shadow-lg shadow-purple-500/20 relative group cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-black text-[14px] md:text-[15px] leading-tight">
                        Chronic <br /> Disease Care
                      </h3>
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-purple-500 shadow-sm">
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Activity className="w-8 h-8 text-white/90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Check Packages Section */}
      <section className="bg-white pt-8 pb-8 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 z-10">
          {/* Billboard Card - Light Theme */}
          <div className="bg-[#f8fafc] border border-slate-100 rounded-[24px] p-8 md:p-12 relative overflow-hidden group shadow-sm">
            {/* Background decorative element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl group-hover:bg-teal-500/10 transition-all duration-700"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              {/* Left Side: Content */}
              <div className="w-full lg:w-5/12 flex flex-col gap-6 text-center lg:text-left">
                <div>
                  <h2 className="text-[#1e3d36] text-[32px] md:text-[42px] font-black leading-tight mb-4">
                    <span className="text-teal-600">Health Check</span> <br />
                    Packages
                  </h2>
                  <p className="text-slate-500 text-[15px] md:text-[16px]">
                    Comprehensive health screening packages designed for you and your family's specific needs.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <Link to="/health-check" className="w-full sm:w-fit px-8 py-2.5 bg-teal-600 text-white rounded-[6px] font-bold text-[15px] hover:bg-[#1e3d36] transition-all shadow-lg hover:shadow-teal-500/20 text-center">
                    See All Packages
                  </Link>
                </div>
              </div>

              {/* Right Side: 4 Subjects Grid */}
              <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "General Health Checkup", icon: GeneralHealthIcon, color: "bg-blue-50 border-blue-100 text-blue-900" },
                  { title: "Heart Health Checkup", icon: HeartCareIcon, color: "bg-red-50 border-red-100 text-red-900" },
                  { title: "Executive Health Checkup", icon: ExecutiveCheckIcon, color: "bg-purple-50 border-purple-100 text-purple-900" },
                  { title: "Breast Cancer Screening", icon: BreastCancerIcon, color: "bg-pink-50 border-pink-100 text-pink-900" },
                ].map((item, index) => (
                  <div key={index} className={`${item.color.split(' ')[0]} border ${item.color.split(' ')[1]} p-5 rounded-[12px] flex items-center gap-4 hover:shadow-md transition-all cursor-pointer group/item shadow-sm`}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-white p-2 shadow-sm">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className={`font-bold text-[16px] ${item.color.split(' ')[2]}`}>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Plan (Membership) Billboard Section */}
      <section className="bg-white pt-4 pb-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 z-10">
          {/* Billboard Card - Light Theme */}
          <div className="bg-[#f8fafc] border border-slate-100 rounded-[24px] p-8 md:p-12 relative overflow-hidden group shadow-sm">
            {/* Background decorative element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl group-hover:bg-teal-500/10 transition-all duration-700"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              {/* Left Side: Content */}
              <div className="w-full lg:w-5/12 flex flex-col gap-6 text-center lg:text-left">
                <div>
                  <h2 className="text-[#1e3d36] text-[32px] md:text-[42px] font-black leading-tight mb-4">
                    <span className="text-teal-600">Care</span> <br />
                    Plan
                  </h2>
                  <p className="text-slate-500 text-[15px] md:text-[16px]">
                    Choose the perfect membership plan for you and your family to enjoy exclusive benefits and discounts.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <Link to="/membership" className="w-full sm:w-fit px-8 py-2.5 bg-teal-600 text-white rounded-[6px] font-bold text-[15px] hover:bg-[#1e3d36] transition-all shadow-lg hover:shadow-teal-500/20 text-center">
                    Get Membership
                  </Link>
                </div>
              </div>

              {/* Right Side: 6 Subjects Grid */}
              <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { title: "Individual Plan", sub: "For 1 Person", icon: <Users className="w-5 h-5" />, color: "bg-blue-50 border-blue-100 text-blue-900" },
                  { title: "Couple Plan", sub: "For 3 Person", icon: <Users className="w-5 h-5" />, color: "bg-teal-50 border-teal-100 text-teal-900" },
                  { title: "Family Plan", sub: "For 5 Person", icon: <Heart className="w-5 h-5" />, color: "bg-rose-50 border-rose-100 text-rose-900" },
                  { title: "Joint Family Plan", sub: "For 10 Person", icon: <Users className="w-5 h-5" />, color: "bg-orange-50 border-orange-100 text-orange-900" },
                  { title: "Personalized Care Plan", sub: "For 1 Person", icon: <ShieldCheck className="w-5 h-5" />, color: "bg-purple-50 border-purple-100 text-purple-900" },
                  { title: "Group Plan", sub: "Min 5 Persons", icon: <ShieldCheck className="w-5 h-5" />, color: "bg-emerald-50 border-emerald-100 text-emerald-900" },
                ].map((item, index) => (
                  <div key={index} className={`${item.color.split(' ')[0]} border ${item.color.split(' ')[1]} p-3.5 md:p-4 rounded-[12px] flex items-center gap-3 hover:shadow-md transition-all cursor-pointer group/item shadow-sm`}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white p-2 shadow-sm">
                      <div className={item.color.split(' ')[2].replace('text-', 'text-')}>
                        {React.cloneElement(item.icon, { className: `w-5 h-5 ${item.color.split(' ')[2]}` })}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className={`font-bold text-[14.5px] leading-tight ${item.color.split(' ')[2]}`}>{item.title}</h3>
                      <p className={`${item.color.split(' ')[2]} opacity-70 text-[12px] font-medium`}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* About Platform Section */}
      <section className="login-bg py-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 z-10">
          <div className="glass-card p-10 md:p-16 rounded-[20px] border border-white/60">
            <h2 className="text-[28px] md:text-[36px] font-black text-brand-900 mb-2 leading-tight">
              Stay Healthy with <span className="text-[#1e3d36]">“Easy Healthcare”</span> online Care platform
            </h2>
            <p className="text-[#1e3d36] font-bold text-[18px] mb-8 italic">We bring care to health</p>

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
