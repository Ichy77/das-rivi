
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Music, Utensils, GlassWater } from 'lucide-react';
import RiviLogo from '@/components/RiviLogo';
import { Button } from '@/components/ui/button';

const EventDetail = () => {
  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button 
          asChild 
          variant="ghost" 
          className="mb-8 text-rivi-gold hover:text-white hover:bg-rivi-burgundy/20 flex items-center gap-2"
        >
          <Link to="/">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </Button>
        
        <div className="page-container bg-black bg-opacity-80 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-rivi-gold/20 animate-fade-in">
          <RiviLogo />
          
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-rivi-gold mb-3">Richy turns 29</h1>
            <p className="text-base md:text-lg text-white italic">From fine dining to house club vibes</p>
            <div className="mt-5 flex justify-center">
              <div className="h-0.5 w-24 bg-rivi-gold"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-3">
              <Calendar size={24} className="text-rivi-gold" />
              <div>
                <h3 className="text-rivi-gold font-medium">Date</h3>
                <p className="text-white/80">April 2025</p>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-3">
              <Clock size={24} className="text-rivi-gold" />
              <div>
                <h3 className="text-rivi-gold font-medium">Time</h3>
                <p className="text-white/80">Starting at 4 PM</p>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-3">
              <MapPin size={24} className="text-rivi-gold" />
              <div>
                <h3 className="text-rivi-gold font-medium">Location</h3>
                <p className="text-white/80">das-RIVI, Düsseldorf</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none text-white">
            <h2 className="text-rivi-gold font-serif text-2xl mb-4">Join Us for the Celebration</h2>
            
            <p className="mb-4">
              It's that time of year again – Richy's birthday is here and we're transforming das-RIVI 
              for a celebration that evolves with the day. We're ditching the formal for the casual, 
              trading fine dining for good vibes, and creating the perfect atmosphere for connection and celebration.
            </p>
            
            <div className="flex items-start gap-3 mb-4">
              <Music size={24} className="text-rivi-gold mt-1" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xl">The Sounds</h3>
                <p className="text-white/80">
                  Curated house tracks that build from relaxed afternoon grooves to more energetic evening beats. 
                  The perfect soundtrack to conversations and celebrations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 mb-4">
              <Utensils size={24} className="text-rivi-gold mt-1" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xl">The Food</h3>
                <p className="text-white/80">
                  Gourmet grilled delights prepared right on our terrace. From classic BBQ favorites to unexpected flavor 
                  combinations that match our easy-going atmosphere.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 mb-6">
              <GlassWater size={24} className="text-rivi-gold mt-1" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xl">The Drinks</h3>
                <p className="text-white/80">
                  Refreshing cocktails, chilled beers, and a selection of non-alcoholic options to keep the good times flowing. 
                  Our signature birthday drink will make its debut!
                </p>
              </div>
            </div>
            
            <div className="elegant-divider">
              <span className="px-4 font-serif text-rivi-gold">✦</span>
            </div>
            
            <p className="text-center italic mt-6 text-rivi-gold">
              No gifts necessary – just bring your good energy and ready-to-celebrate spirit!
            </p>
            
            <p className="text-center mt-6">
              Looking forward to celebrating another trip around the sun with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
