import { useState, useEffect } from 'react';
import { Star, MessageCircle, Eye, CheckCircle, Phone, MapPin } from 'lucide-react';

const BusinessCard = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsAnimated(true), 500);
    const timer2 = setTimeout(() => setShowNotifications(true), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Main Business Card */}
      <div
        className={`bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 transition-all duration-700 ${
          isAnimated ? 'scale-100 opacity-100 rotate-0' : 'scale-95 opacity-0 rotate-2'
        }`}
      >
        {/* Header with verification badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-700">Verified Business</span>
          </div>
          <div className="bg-gradient-to-r from-[#2D6CDF] to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Top Pick
          </div>
        </div>

        {/* Business Image */}
        <div className="w-full h-32 bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D6CDF]/20 to-emerald-500/20" />
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-xs font-semibold text-slate-700">4.8 ★</span>
          </div>
        </div>

        {/* Business Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-800">Prime Coffee House</h3>

          <div className="flex items-center space-x-2 text-slate-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Downtown Business District</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>234 views</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>12 inquiries</span>
              </div>
            </div>
            <Phone className="w-5 h-5 text-[#2D6CDF] cursor-pointer hover:scale-110 transition-transform" />
          </div>

          {/* Action Button */}
          <button className="w-full bg-gradient-to-r from-[#2D6CDF] to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-[#2D6CDF] transition-all duration-300 transform hover:-translate-y-0.5">
            Contact Business
          </button>
        </div>
      </div>

      {/* Floating Notifications */}
      {showNotifications && (
        <>
          <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-bounce shadow-lg">
            New Inquiry!
          </div>

          <div className="absolute -bottom-2 -left-4 bg-[#2D6CDF] text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse shadow-lg">
            Just Verified
          </div>
        </>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/20 to-emerald-500/20 rounded-2xl blur-xl -z-10 animate-pulse" />
    </div>
  );
};

export default BusinessCard;