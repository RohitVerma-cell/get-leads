// import { useState, useEffect } from 'react';
// import { ArrowRight, Play, CheckCircle, Star, Heart, TrendingUp, Users, Award, Zap } from 'lucide-react';
// import BusinessCard from '../common/businesscard';

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Floating Icons Component (inline)
//   const FloatingIcons = () => {
//     const [isIconsVisible, setIsIconsVisible] = useState(false);

//     useEffect(() => {
//       const timer = setTimeout(() => setIsIconsVisible(true), 1000);
//       return () => clearTimeout(timer);
//     }, []);

//     const icons = [
//       { Icon: Star, position: 'top-8 left-8', delay: '0s', color: 'text-yellow-500' },
//       { Icon: Heart, position: 'top-16 right-12', delay: '0.5s', color: 'text-red-500' },
//       { Icon: TrendingUp, position: 'bottom-20 left-4', delay: '1s', color: 'text-emerald-500' },
//       { Icon: Users, position: 'bottom-8 right-8', delay: '1.5s', color: 'text-[#2D6CDF]' },
//       { Icon: Award, position: 'top-32 left-16', delay: '2s', color: 'text-purple-500' },
//       { Icon: Zap, position: 'bottom-32 right-4', delay: '2.5s', color: 'text-orange-500' },
//     ];

//     if (!isIconsVisible) return null;

//     return (
//       <>
//         {icons.map(({ Icon, position, delay, color }, index) => (
//           <div
//             key={index}
//             className={`absolute ${position} animate-bounce`}
//             style={{
//               animationDelay: delay,
//               animationDuration: '2s',
//               animationIterationCount: 'infinite',
//             }}
//           >
//             <div className={`p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer ${color}`}>
//               <Icon className="w-5 h-5" />
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
//       <div className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

//             {/* Left Content */}
//             <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
//               <div className="space-y-6">
//                 <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
//                   Your Business Deserves the{' '}
//                   <span className="text-transparent bg-gradient-to-r from-[#2D6CDF] to-emerald-500 bg-clip-text">
//                     Spotlight
//                   </span>
//                 </h1>

//                 <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
//                   Biz Connect helps you stand out, earn trust, and reach real customers — all in one place.
//                 </p>
//               </div>

//               {/* CTAs */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 bg-gradient-to-r from-[#2D6CDF] to-blue-600 hover:from-blue-600 hover:to-[#2D6CDF] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
//                   List My Business Now
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>

//                 <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 border-2 border-slate-300 text-slate-700 hover:border-[#2D6CDF] hover:text-[#2D6CDF] text-lg font-semibold rounded-xl group">
//                   <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
//                   See How It Works
//                 </button>
//               </div>

//               {/* Benefits */}
//               <div className="space-y-4 pt-4">
//                 {[
//                   'Verified Listings That Build Trust',
//                   'Get Discovered by Genuine Local Customers',
//                   'Highlight Your Unique Services & Offers',
//                 ].map((benefit, index) => (
//                   <div
//                     key={benefit}
//                     className={`flex items-center space-x-3 transition-all duration-700 ${
//                       isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
//                     }`}
//                     style={{ transitionDelay: `${(index + 1) * 200}ms` }}
//                   >
//                     <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
//                     <span className="text-slate-700 text-lg">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Content - Business Card Mockup */}
//             <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
//               <div className="relative">
//                 <FloatingIcons />
//                 <div className="relative z-10">
//                   <BusinessCard />
//                 </div>
//                 <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#2D6CDF]/20 to-emerald-500/20 rounded-full blur-3xl"></div>
//                 <div className="absolute -bottom-12 -left-8 w-48 h-48 bg-gradient-to-br from-emerald-500/20 to-[#2D6CDF]/20 rounded-full blur-2xl"></div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Star, Heart, TrendingUp, Users, Award, Zap } from 'lucide-react';
import BusinessCard from '../common/businesscard';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const FloatingIcons = () => {
    const [isIconsVisible, setIsIconsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsIconsVisible(true), 1000);
      return () => clearTimeout(timer);
    }, []);

    const icons = [
      { Icon: Star, position: 'top-8 left-8', delay: '0s', color: 'text-yellow-500' },
      { Icon: Heart, position: 'top-16 right-12', delay: '0.5s', color: 'text-red-500' },
      { Icon: TrendingUp, position: 'bottom-20 left-4', delay: '1s', color: 'text-emerald-500' },
      { Icon: Users, position: 'bottom-8 right-8', delay: '1.5s', color: 'text-[#2D6CDF]' },
      { Icon: Award, position: 'top-32 left-16', delay: '2s', color: 'text-purple-500' },
      { Icon: Zap, position: 'bottom-32 right-4', delay: '2.5s', color: 'text-orange-500' },
    ];

    if (!isIconsVisible) return null;

    return (
      <>
        {icons.map(({ Icon, position, delay, color }, index) => (
          <div
            key={index}
            className={`absolute ${position} animate-bounce`}
            style={{
              animationDelay: delay,
              animationDuration: '2s',
              animationIterationCount: 'infinite',
            }}
          >
            <div className={`p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      <div className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Your Business Deserves the{' '}
                  <span className="text-transparent bg-gradient-to-r from-[#2D6CDF] to-emerald-500 bg-clip-text">
                    Spotlight
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  Biz Connect helps you stand out, earn trust, and reach real customers — all in one place.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 bg-gradient-to-r from-[#2D6CDF] to-blue-600 hover:from-blue-600 hover:to-[#2D6CDF] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                  List My Business Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-slate-300 bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-slate-700 hover:border-[#2D6CDF] hover:text-[#2D6CDF] group">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  See How It Works
                </button>
              </div>

              {/* Benefits */}
              <div className="space-y-4 pt-4">
                {[
                  'Verified Listings That Build Trust',
                  'Get Discovered by Genuine Local Customers',
                  'Highlight Your Unique Services & Offers',
                ].map((benefit, index) => (
                  <div
                    key={benefit}
                    className={`flex items-center space-x-3 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Business Card */}
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <FloatingIcons />
                <div className="relative z-10">
                  <BusinessCard />
                </div>
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#2D6CDF]/20 to-emerald-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-8 w-48 h-48 bg-gradient-to-br from-emerald-500/20 to-[#2D6CDF]/20 rounded-full blur-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

