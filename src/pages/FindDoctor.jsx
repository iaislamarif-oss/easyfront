import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, MapPin, UserRound, Filter, ArrowRight, Smartphone } from 'lucide-react';

const FindDoctor = () => {
  // Dummy Data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "12 years",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200",
      location: "Dhaka, Bangladesh",
      available: "Today"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      experience: "8 years",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",
      location: "Chittagong, Bangladesh",
      available: "Tomorrow"
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: "Neurologist",
      experience: "15 years",
      rating: 5.0,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200",
      location: "Dhaka, Bangladesh",
      available: "Monday"
    }
  ];

  const specialties = ["All Specialties", "Cardiologist", "Dermatologist", "Neurologist", "Orthopedic", "Pediatrician"];
  const locations = ["All Locations", "Dhaka", "Chittagong", "Rajshahi", "Sylhet"];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  return (
    <div className="min-h-screen bg-slate-50 font-manrope">
      {/* Header Section */}
      <section className="bg-white pt-10 pb-16 min-h-[300px]">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Content removed as requested */}
        </div>
      </section>

      {/* Main Content with Pure White Background */}
      <section className="bg-white pb-24 relative overflow-hidden flex flex-col items-center justify-center p-4">
        {/* Background Decorative Element removed as requested */}
        <div className="w-full max-w-[1200px] mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
            {[
              { main: "Find Specialist", sub: "Doctor Near You", path: "/find-specialist" },
              { main: "Easy Healthcare", sub: "Specialist Doctor", path: "/easy-healthcare-specialist" },
              { main: "Dhaka City", sub: "Specialist Doctor", path: "/dhaka-city-specialist" },
              { main: "Metro City", sub: "Specialist Doctor", path: "/metro-city-specialist" },
              { main: "Select Hospital", sub: "Specialist Doctor", path: "/select-hospital-specialist" }
            ].map((item, index) => (
              <Link 
                to={item.path}
                key={index} 
                className="bg-gradient-to-b from-white to-[#F0F9FF] p-6 rounded-[5px] border border-slate-100 flex flex-col items-start gap-5 w-full h-[220px] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/50 flex items-center justify-center text-brand-600 shadow-none shrink-0">
                  <UserRound className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3 mt-auto w-full">
                  <h3 className="font-bold flex flex-col leading-tight">
                    <span className="text-[17px] bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B]">{item.main}</span>
                    {item.sub && <span className="text-[13px] font-medium mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#0089BA] to-[#008E6B]">{item.sub}</span>}
                  </h3>
                  <div className="flex items-center gap-2 text-brand-600 hover:opacity-80 transition-opacity font-bold text-[13px] group cursor-pointer">
                    Search Doctor
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default FindDoctor;
