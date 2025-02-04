 
  import Image from "next/image";

  export default function DressStyle() {
      return (
          <section className="w-full max-w-[1239px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-[#F0F0F0]">
              <h1 className="w-full max-w-[687px] font-integral text-2xl sm:text-3xl md:text-[48px] font-bold leading-tight sm:leading-snug md:leading-[57.6px] text-center uppercase mb-6 sm:mb-8 md:mb-10">
                  BROWSE BY dress STYLE
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-[1200px]">
{/*Image-1*/}
               
<div className="relative col-span-1 w-full h-[290px] sm:h-[290px] md:h-[289px] rounded-[20px] transition-transform hover:scale-105 duration-300">
                  <Image 
                      src={"/casual.png"} 
                      alt="Casual dress style" 
                      width={407} 
                      height={289}
                   
                    className="rounded-[20px] " 
                  />
                    {/* Text over the image */}
                    <div className="absolute bottom-[210px] left-[34px] w-[114px] h-[49px] opacity-100">
        <p className="font-satoshi text-[36px] font-bold leading-[48.6px] text-black">
          Casual
        </p>
         </div>
            
       </div>
{/*Image-2*/}
                  <div className="relative col-span-1 sm:col-span-2 w-full h-[190px] sm:h-[240px] md:h-[289px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300">

      {/* Image */}
      
                  <Image 
                      src={"/formal.png"} 
                      alt="Formal dress style" 
                      width={684} 
                      height={289} 
                      className="rounded-[20px] " 
                  />
                  {/* Text over the image */}
                   <div className="absolute top-[25px] left-[36px] w-[116px] h-[49px] opacity-100 text-left"> 
        <p className="font-satoshi text-[36px] font-bold leading-[48.6px] font-white;
">
          Formal
        </p>
        </div>
      
     </div>

{/*Image-3*/}
<div className="relative col-span-1 sm:col-span-2 w-full h-[190px] sm:h-[240px] md:h-[289px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300">

                  <Image 
                      src={"/style.png"} 
                      alt="Party dress style" 
                      width={684} 
                      height={289}  
                      className="col-span-1 sm:col-span-2 w-full h-[190px] sm:h-[240px] md:h-[289px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
                  />
        {/* Text over the image */}
        <div className="absolute top-[25px] left-[36px] w-[116px] h-[49px] opacity-100 text-left"> 
        <p className="font-satoshi text-[36px] font-bold leading-[48.6px] font-white;
">
          Formal
        </p>
        </div>
      
     </div>


                  {/*Image-4*/}
                  <div className="relative col-span-1 w-full h-[290px] sm:h-[290px] md:h-[289px] rounded-[20px] transition-transform hover:scale-105 duration-300">
                  {/* Image */}
                  <Image 
                      src={"/gym.png"} 
                      alt="Gym dress style" 
                      width={407} 
                      height={289} 
                    //   className="col-span-1 w-full h-[190px] sm:h-[240px] md:h-[289px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
                    className="col-span-1 w-full h-[290px] sm:h-[290px] md:h-[289px] rounded-[20px] transition-tranform hover:scale-105 duration-300" 
                  />
                    <div className="absolute bottom-[210px] left-[34px] w-[114px] h-[49px] opacity-100">
        <p className="font-satoshi text-[36px] font-bold leading-[48.6px] text-black">
          Gym
        </p>
         </div>
          </div>
          </div>
         </section>
     );
 }
 
