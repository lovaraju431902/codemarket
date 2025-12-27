import Image from "next/image"

import { Oswald, Roboto_Mono } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  
})

const Community = () => {
  return (
    

        
<div className="flex py-[6px] border w-[440px]  border-gray-400 flex-col-2 items-center  bg-white-300  gap-3 rounded-4xl">
  
  <div className="flex ml-2 -space-x-4 rtl:space-x-reverse">
    <Image
      className="w-8 h-8 border-2 border-white rounded-full drop-shadow-md"
      src="/images/avatar11.png"
      alt="User avatar"
      width={40}
      height={40}
    />
    <Image
      className="w-8 h-8 border-2 border-white rounded-full drop-shadow-md"
      src="/images/avatar12.png"
      alt="User avatar"
      width={40}
      height={40}
    />
    <Image
      className="w-8 h-8 border-2 border-white rounded-full drop-shadow-md"
      src="/images/avatar13.png"
      alt="User avatar"
      width={40}
      height={40}
    />
    <Image
      className="w-8 h-8 border-2 border-white rounded-full drop-shadow-md"
      src="/images/avatar15.png"
      alt="User avatar"
      width={40}
      height={40}
    />
    


 </div>
  <p className={`text-lg  text-[14px]   text-black font-serif`}>Over 10k+ freelancers use codemarket in Africa</p>
  
  </div>
    



    
  )
}

export default Community