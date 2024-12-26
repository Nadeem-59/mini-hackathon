export default function CardT2() {
    return (
      <div className="w-full h-full px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-2 sm:gap-3">
        {/* Title */}
        <h5 className="font-Montserrat font-bold text-lg sm:text-xl tracking-wide text-[#252B42]">
          Graphic Design
        </h5>
        
        {/* Subtitle */}
        <h5 className="font-Montserrat font-semibold text-sm sm:text-base leading-6 tracking-wide text-[#737373]">
          English Department
        </h5>
        
        {/* Pricing */}
        <div className="flex gap-2 items-center">
          <h5 className="font-Montserrat font-bold text-sm sm:text-base leading-5 tracking-wide text-[#BDBDBD] line-through">
            $16.48
          </h5>
          <h5 className="font-Montserrat font-bold text-sm sm:text-base leading-5 tracking-wide text-[#23856D]">
            $6.48
          </h5>
        </div>
      </div>
    );
  }