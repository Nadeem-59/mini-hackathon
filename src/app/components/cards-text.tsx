import Image from "next/image";
import colours from "@/app/images/product-colors.png";

export default function CardText() {
  return (
    <div className="w-full max-w-[239px] h-auto py-6 px-6 flex flex-col items-center justify-center gap-4 sm:gap-3 sm:py-4 sm:px-4 md:w-[239px] md:h-[188px] md:py-[25px] md:px-[25px] md:gap-[10px]">
      <h5 className="w-full font-Montserrat font-bold text-lg leading-6 text-center text-[#252B42] sm:text-base sm:leading-5">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-sm leading-6 text-center text-[#737373] sm:text-xs sm:leading-5">
        English Department
      </p>
      <div className="w-full px-1 py-1 flex justify-center gap-2 sm:gap-1">
        <h5 className="font-Montserrat font-bold text-lg leading-6 text-[#BDBDBD] sm:text-base sm:leading-5">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-lg leading-6 text-[#23856D] sm:text-base sm:leading-5">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-4 flex justify-center">
        <Image src={colours} alt="colours" className="w-full h-auto" />
      </div>
    </div>
  );
}