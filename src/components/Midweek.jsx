import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function Midweek() {
  return (
    <div className="max-w-[1275px] mx-auto">
      <div className="flex md:flex-row flex-col items-center md:gap-10 gap-6">
        <div>
          <img
            src="public\midweekimage.jpg"
            className="md:w-[432px] md:h-[432px] w-auto h-auto md:rounded-[20px] rounded-none object-cover"
            alt="meditationimage"
          />
        </div>
        <div className="flex flex-col gap-[20px] md:p-0 px-[15px] ">
          <h1 className="md:max-w-2xl  max-w-lg md:text-5xl text-lg uppercase font-bold md:leading-[62.2px] leading-[25.2px] ">
            Midweek Calm – 20% Off All Bookings
          </h1>
          <p className="max-w-[803px] md:text-lg text-[14px] text-[#4D4D4D] font-[500] leading-[25.2px]">
            Take a mindful pause midweek. Book any session and enjoy 20%
            off—because calm shouldn't wait for the weekend.
          </p>
          <span className="cursor-pointer md:text-[19px] text-[14px]  font-[600] text-[#000]">
            by{" "}
            <a
              href="https://www.instagram.com/innerstudio_glow/"
              className="underline"
            >
              INNERSTUDIO GLOW
            </a>
          </span>
          <p className="text-[#616161] md:text-[16px] text-[12px] font-[600]">
            Fitness & Body Movement / Yoga
          </p>
          <div className="flex flex-row items-center gap-[9px]">
            <FaLocationDot
              color="#de9636"
              className="md:w-[21px] w-[21px] md:h-[35px] h-[35px]"
            />
            <p className="md:text-[20px] text-[12px] font-[500] text-[#464646] leading-[22px]">
              Sector 45, Gurugram, Haryana 122018, India
            </p>
          </div>
          <button className=" md:text-[20px] text-[12px] font-[500] uppercase w-[192px] md:w-[266px] flex justify-center items-center gap-[10px]  md:h-[60px] h-[49px] md:py-[20px] py-[12px] md:px-[44px] px-[12px] border-[1px] bg-[#121212] group text-white rounded-[10px] cursor-pointer transition hover:opacity-75 hover:h-[62px] hover:py-[22px]  ">
            Get this Deal
            <IoIosArrowForward
              size={20}
              color="#fff"
              className="group-hover:translate-x-1 transition md:w-[20px] md:h-[20px]"
            />
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#A2A2A2] my-20 md:block hidden " />
      <div className="flex md:flex-row flex-col gap-7 mt-12 md:mt-0 md:items-center md:p-0 px-[15px] w-full">
        <div className="md:w-[630px] w-full">
          <img
            src="/ladiesnightimage.png"
            className="md:w-[630px] md:h-[305.455px] w-full h-full rounded-[20px]"
            alt="ladiesnightimage"
          />
        </div>

        <div className="flex flex-row md:w-[40%] w-full md:gap-[22px] gap-4 justify-between md:justify-start">
          <img
            src="/meera1stimage.png"
            className="md:w-[305px] md:h-[305px] w-1/2 h-[150px] rounded-[20px] object-cover"
            alt="meera1stimage"
          />

          <img
            src="/meera2ndimage.png"
            className="md:w-[305px] md:h-[305px] w-1/2 h-[150px] rounded-[20px] object-cover"
            alt="meera2ndimage"
          />
        </div>
      </div>
    </div>
  );
}

export default Midweek;
