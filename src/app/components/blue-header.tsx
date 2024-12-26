import Image from "next/image";
import phone from "@/app/images/icn settings icn-xs.png";
import mail from "@/app/images/icn settings icn-xs (1).png";
import insta from "@/app/images/icn settings icn-xs (2).png";
import yout from "@/app/images/icn settings icn-xs (3).png";
import fb from "@/app/images/icn settings icn-xs (4).png";
import twit from "@/app/images/icn settings icn-xs (5).png";

export default function BlueHeader() {
  return (
    <div className="w-full h-auto bg-[#252B42] py-2 md:py-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-full px-4 md:px-[24px] gap-4">
        {/* Left section: Contact Info */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <Image src={phone} alt="phone" width={16} height={16} />
            <span className="font-Montserrat font-semibold text-[14px]">
              (225) 555-0118
            </span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <Image src={mail} alt="mail" width={16} height={16} />
            <span className="font-Montserrat text-[14px]">
              michelle.rivera@example.com
            </span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white text-center">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white text-center md:text-left">
            Follow Us:
          </h6>
          <div className="flex gap-[10px] justify-center md:justify-start">
            <Image src={insta} alt="Instagram" width={16} height={16} />
            <Image src={yout} alt="YouTube" width={16} height={16} />
            <Image src={fb} alt="Facebook" width={16} height={16} />
            <Image src={twit} alt="Twitter" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}