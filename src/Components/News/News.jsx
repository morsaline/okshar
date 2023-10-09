import React from "react";
import { Link } from "react-router-dom";
import bgTitle from "../../assets/bgtitle.png";
import bgTitleNews from "../../assets/bgTitleNews.png";
import { Icon } from "@iconify/react";

const News = ({ news }) => {
  console.log(news);
  return (
    <div>
      <div className={`${"flex justify-start"}`}>
        <div className="relative inline-block max-w-content">
          {" "}
          <img src={bgTitle} alt="" className="w-[80%]" />
          <p className="absolute top-[30%] left-[15%] text-white font-bold text-[18px]">
            {news[0]?.categoryTitle}
          </p>
        </div>
      </div>
      <div className="flex gap-6 p-5 ">
        {" "}
        <div className="w-[50%] p-4 ">
          {" "}
          <p className=" my-1 text-black font-bold  mt-2 hover:text-red-600 transition-all duration-300">
            {news[0]?.title.slice(0, 50) + "..."}
          </p>
          <div className="h-[250px] overflow-hidden">
            <img
              src={news[0]?.image}
              alt=""
              className="w-full h-full  transform scale-100  hover:scale-110 transition-transform duration-300 "
            />
          </div>
          <div className="my-2 flex justify-start items-center gap-1 text-[13px] font-semibold text-gray-500">
            {" "}
            <Icon icon="mdi:clock-outline" />
            <p>Oct 6, 2023</p>
          </div>
          <p className="text-[12px] text-gray-500">
            {news[0]?.description.slice(0, 200) + "..."}
            <Link to={`/news/${news[0]?._id}`}>
              {" "}
              <span className="  text-indigo-800 font-semibold    ">
                বিস্তারিত
              </span>
            </Link>
          </p>
          {/* <Link to={`/news/${news[0]?._id}`}>
            {" "}
            <button className="bg-transparent hover:bg-blue-500 text-indigo-800 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-[13px] mt-2 w-1/2">
              বিস্তারিত
            </button>
          </Link> */}
        </div>
        <div className="w-[50%]">
          <div className="grid grid-cols-2 gap-3">
            {news?.slice(0, 4).map((singleNews, idx) => (
              <Link to={`/news/${singleNews._id}`} key={idx}>
                <div className="flex items-center gap-4  mb-3 border p-2">
                  <div className="overflow-hidden">
                    <div className=" w-full overflow-hidden ">
                      {" "}
                      <div className="h-[125px] overflow-hidden">
                        <img
                          src={singleNews.image}
                          alt=""
                          className="w-full h-full 
                           transform scale-100  hover:scale-110 transition-transform duration-300 "
                        />
                      </div>
                      <p className=" text-black font-bold text-[10px] mt-2 hover:text-red-600 transition-all duration-200">
                        {singleNews?.title}
                      </p>
                      <div className="mt-2 flex justify-end items-center gap-1 text-[11px] font-semibold text-gray-500">
                        {" "}
                        <Icon icon="mdi:clock-outline" />
                        <p>Oct 6, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <Link to={`allNews/${news[0]?.category}`}>
              <button className="bg-[#1F2659] hover:bg-[#C21820] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  text-[15px] mt-1 w-full ">
                সব খবর
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
