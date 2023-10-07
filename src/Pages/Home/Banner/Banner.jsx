import React from "react";
import banner from "../../../assets/Home/BannerImg.png";
import Icon1 from "../../../assets/Home/Icon1.png";
import Icon2 from "../../../assets/Home/Icon2.png";
import Icon3 from "../../../assets/Home/Icon3.png";
import Icon4 from "../../../assets/Home/Icon3.png";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const banners = [
    {
      image: `${banner}`,
      title: "সত্য প্রতিবেদন আমরা আপনার জন্য তৈরি করি সংবাদে আপনার সাথে সবসময়",
      button: "আরও দেখুন",
    },
    {
      image: `${banner}`,
      title: "সত্য প্রতিবেদন আমরা আপনার জন্য তৈরি করি সংবাদে ",
      button: "আরও দেখুন",
    },
    {
      image: `${banner}`,
      title: "সত্য প্রতিবেদন আমরা আপনার জন্য",
      button: "আরও দেখুন",
    },
  ];
  const BcsCategories = [
    {
      category: "বিসিএস সিলেবাস",
      image: `${Icon1}`,
      bgColor: "bg-[#1F2659]",
    },
    {
      category: "বিসিএস প্রশ্ন",
      image: `${Icon2}`,
      bgColor: "bg-[#2C97EA]",
    },
    {
      category: "বিসিএস প্রস্তুতি",
      image: `${Icon3}`,
      bgColor: "bg-[#2A2855]",
    },
    {
      category: "বই সমাবেশ",
      image: `${Icon4}`,
      bgColor: "bg-[#C21820]",
    },
  ];
  return (
    <div className="relative my-6">
      <div className="-mt-[41px] z-20  w-[50%] absolute bottom-0 left-[25%]">
        <div className="flex justify-around gap-1 items-center">
          {BcsCategories?.map((categoryItem, index) => (
            <Link key={index} to={`/bcs/${categoryItem?.category}`}>
              {" "}
              <div
                className={`flex gap-2 px-4 py-2 items-center ${categoryItem.bgColor} text-white font-bold`}
              >
                <img src={categoryItem?.image} alt="" className="w-[25px]" />
                <p className="text-[12px]">{categoryItem.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 ">
        <Swiper
          // pagination={{
          //   type: "progressbar",
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-96"
        >
          {banners?.map((banner, index) => (
            <div key={index}>
              <SwiperSlide>
                <div
                  className="h-[450px] bg-center bg-cover relative -z-10"
                  style={{ backgroundImage: `url(${banner.image})` }}
                >
                  <div className="font-semibold text-[24px] absolute top-[21%] left-[15%]">
                    <p className="my-2 w-[400px] leading-10">{banner.title}</p>

                    <button className="p-2 border border-black text-[11px] my-3">
                      {banner.button}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
