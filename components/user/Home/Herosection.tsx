"use client"
import { useEffect,useRef } from "react";
import { Input } from "@/components/ui/input";
import { icons } from "@/utils/icons";
import { Search } from "lucide-react";
import { BBH_Bartle } from 'next/font/google';
import { BBH_Hegarty } from "next/font/google";  // ఇలా import చెయ్ (space లు underscore అవుతాయి)
import Image from "next/image";
import webdesign1 from '/images/webdesign1.png'; // Adjust path if needed
import webdesign2 from '/images/webdesign2.png';
import mobiledesign1 from '/images/mobiledesign1.png';

const bbhBartle = BBH_Bartle({
  subsets: ['latin'], 
  weight: ['400'],     
 
});

const bbhHergarty=BBH_Hegarty({
  subsets:['latin'],
  weight:['400']
})


const Herosection = () => {







  return (
   
        <>
          <div className="grid md:grid-cols-2 pt-20 bg-linear-to-r from-slate-100 to-purple-200 h-screen">
            <div className="p-5 mt-10 md:mt-3 space-y-10 ">
              <h1
                className={`animate-fadein text-center sm:text-left text-3xl md:ml-3 sm:text-5xl text-black leading-tight ${bbhHergarty.className}`}
              >
                2M+ Curated Applications
              </h1>
    
              <p className="animate-fadein text-center text-slate-700 leading-relaxed font-serif">
                Explore the best premium themes and plugins available for sale. Our unique collection is hand-curated by experts. Find and buy the perfect premium theme today.
              </p>
    
              <div className="relative">
                <Search className="absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 text-white bg-gradient-to-r from-fuchsia-500 to-indigo-600 p-2 rounded-full" />
                <Input
                  placeholder="Search for application source code"
                  className="w-full text-lg text-slate-400 font-sans border-none shadow-md p-8 bg-white rounded-full pl-6 pr-20"
                />
              </div>
    
              {/* Infinite Scrolling - ఇప్పుడు mobile లో కూడా overflow లేదు */}
              <div className="mt-8 overflow-hidden mx-auto max-w-md md:max-w-xl  px-4">
                <div className="flex animate-scroll whitespace-nowrap">
                  {[...icons, ...icons].map((icon, index) => (
                    <div
                      key={index}
                      className="mx-4 inline-block transition-transform duration-300 hover:scale-110"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              
              <div 
                className="relative animate-stick">
                <Image src="/images/next.dpmarket.wowtheme7.com logo67.png" alt="logo" width={50} height={50}/>
              </div>
            </div>

           <div className="relative">

             <div className="bg-blue-600 border animate-cards border-white  shadow-md z-20 absolute left-[290px] top-[230px] h-[120px] w-[120px] text-xl  font-bold text-center px-3 pt-5 rounded-md text-white">1k Customers </div>
            
            
             <div className="bg-white shadow-md absolute z-20 right-[30px] bottom-[350px] h-[150px] w-[120px] text-xl  font-bold text-center px-3 pt-10 rounded-md text-black">1k Customers </div>

             <Image
  src="/images/next.dpmarket.wowtheme7.com logo46.png"
  alt="logo"
  width={200}
  height={200}
  className="absolute left-[200px] top-[170px] animate-infinite-zoom"
  priority
/>

            <Image src="/images/mobiledesign1.png" alt="mobile" width={300} height={100}
            className="absolute left-[50px] top-[150px]"
            
            />
            <Image src="/images/webdesign2.png" alt="mobile" width={250} height={100}
            className="absolute left-[380px] top-[270px]"
            
            />
            <Image src="/images/webdesign1.png" alt="mobile" width={250} height={100}
            className="absolute left-[380px] top-[50px]"
            
            />
           </div>

 
            
         
          </div>
        </>
     




  );
};

export default Herosection;
