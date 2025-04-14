
import React from 'react';
import { Calendar, Clock, MapPin, Music } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RiviLogo from './RiviLogo';
import PageTitle from './PageTitle';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  return (
    <div className="page-container bg-black bg-opacity-80 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-rivi-gold/20 animate-fade-in">
      <RiviLogo />
      <PageTitle mainTitle="Upcoming Events" subtitle="Join the Vibe" />
      
      <div className="grid grid-cols-1 gap-6 mt-8">
        <Card className="bg-black bg-opacity-70 border-rivi-gold/30 text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-rivi-gold text-2xl">Richy turns 29</CardTitle>
                <CardDescription className="text-white/70 mt-1">From fine dining to house club vibes</CardDescription>
              </div>
              <div className="bg-rivi-burgundy p-2 rounded-full">
                <Music size={20} className="text-rivi-gold" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar size={16} className="text-rivi-gold" />
                <span>April 2025</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock size={16} className="text-rivi-gold" />
                <span>Starting at 4 PM</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={16} className="text-rivi-gold" />
                <span>das-RIVI, Düsseldorf</span>
              </div>
            </div>
            
            <p className="text-white/80">
              An afternoon and evening transformation: We're switching from fine-dining elegance to relaxed house vibes. 
              Expect chilled beats, grilled delights, and ice-cold drinks under the warm sun. 
              Join us for Richy's birthday celebration – where good energy meets great company!
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-rivi-burgundy hover:bg-rivi-burgundy/80 text-white border border-rivi-gold/30">
              <Link to="/events/richy-turns-29">
                View Details
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingEvents;
