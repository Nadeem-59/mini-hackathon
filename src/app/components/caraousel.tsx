import Image from "next/image";
import women from "@/app/images/shop-hero-1-pro.jpg";

export default function Carausel() {
  return (
    <div className="relative w-full h-auto border">
      {/* Image Section */}
      <div className="relative w-full h-[20vh] md:h-[60vh] lg:h-[0vh]">
        <Image 
          src={women} 
          alt="women" 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute flex flex-col justify-center items-start gap-5 px-6 lg:px-16 z-10 top-1/4 md:top-1/3 lg:top-1/3 w-full">
        <h5 className="font-Montserrat font-semibold text-sm md:text-base text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight text-white max-w-md lg:max-w-2xl">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-sm md:text-lg leading-5 md:leading-7 text-white max-w-sm lg:max-w-lg">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-[180px] md:w-[200px] lg:w-[221px] h-[50px] md:h-[60px] rounded-md bg-[#2DC071] text-white text-sm md:text-lg lg:text-xl font-Montserrat leading-6 md:leading-8 flex justify-center items-center">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}