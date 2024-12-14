
 import Arrivals from "@/components/Arrival";
 import DressStyle from "@/components/Dressstyle";
 import HappyCustomers from "@/components/Happycustomer";
import Hero from "@/components/Hero";
 import LogoBar from "@/components/Herobutton";

 import Selling from "@/components/Selling";

 export default function Home() {
   return (
   <>
   <Hero/>
 
   <LogoBar/>
   <div className="md:px-[100px] ">
   <Arrivals/>
   <Selling/>
   <DressStyle/>
   <HappyCustomers/>
  
   </div>
   </>
  );
 }


 
      