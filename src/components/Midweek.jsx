import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function Midweek() {
  return (
    <div className="max-w-[1275px] mx-auto">
      <div className="flex items-center gap-10">
        <div>
          <img
            src="public\midweekimage.jpg"
            className="w-[432px] h-[432px] rounded-[20px] object-cover"
            alt="meditationimage"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <h1 className="max-w-2xl text-5xl uppercase font-bold leading-[62.2px]">
            Midweek Calm – 20% Off All Bookings
          </h1>
          <p className="max-w-[803px] text-lg text-[#4D4D4D] font-[500] leading-[25.2px]">
            Take a mindful pause midweek. Book any session and enjoy 20%
            off—because calm shouldn't wait for the weekend.
          </p>
          <span className="cursor-pointer text-[19px] font-[600] text-[#000]">
            by{" "}
            <a
              href="https://www.instagram.com/innerstudio_glow/"
              className="underline"
            >
              INNERSTUDIO GLOW
            </a>
          </span>
          <p className="text-[#616161] text-[16px] font-[600]">
            Fitness & Body Movement / Yoga
          </p>
          <div className="flex flex-row items-center gap-[9px]">
            <FaLocationDot color="#de9636" size={35} />
            <p className="text-[20px] font-[500] text-[#464646] leading-[22px]">
              Sector 45, Gurugram, Haryana 122018, India
            </p>
          </div>
          <button className=" text-[20px] font-[500] uppercase w-[266px] flex justify-center items-center gap-[10px] h-[60px] py-[20px] px-[44px] border-[1px] bg-[#121212] group text-white rounded-[10px] cursor-pointer transition hover:opacity-75 hover:h-[62px] hover:py-[22px]  ">
            Get this Deal
            <IoIosArrowForward
              size={20}
              color="#fff"
              className="group-hover:translate-x-1 transition"
            />
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#E5E5E5] my-20" />
    </div>
  );
}

export default Midweek;
