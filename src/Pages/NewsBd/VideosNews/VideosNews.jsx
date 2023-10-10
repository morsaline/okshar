import React from "react";
import { useEffect, useState } from "react";
// import f from "../../../../assets"
import bgTitle from "../../../assets/bgtitle.png";
// import bgTitleNews from "../../../assets/bgTitleNews.png";
import { Icon } from "@iconify/react";
// import f from "../../../"
import { Link } from "react-router-dom";
import YouTubeEmbed from "../../../Components/YouTubeEmbed/YouTubeEmbed";
const VideosNews = () => {
  const [videosNews, setVideosNews] = useState([]);
  useEffect(() => {
    fetch("../../../../public/videosNews.json")
      .then((res) => res.json())
      .then((data) => setVideosNews(data));
  }, []);
  console.log(videosNews);
  return (
    // <div>
    //   <div className={`${"flex justify-end"}`}>
    //     <div className="relative inline-block max-w-content">
    //       {" "}
    //       <img src={bgTitle} alt="" className="w-[80%]" />
    //       <p className="absolute top-[30%] left-[15%] text-white font-bold text-[18px]">
    //         {videosNews[0]?.categoryTitle}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex gap-1 p-5">
    //     {" "}
    //     <div className="w-1/2">
    //       {" "}
    //       {/* <img
    //         src={videosNews?.newses[0]?.image}
    //         alt=""
    //         className="w-full h-[400px]"
    //       /> */}
    //       <YouTubeEmbed videoId={`${videosNews[0]?.video}`}></YouTubeEmbed>
    //       <p className="font-bold my-1">{videosNews[0]?.title}</p>
    //       <p className="text-[12px]">
    //         {videosNews[0]?.description.slice(0, 190) + "..."}
    //       </p>
    //       <Link to={`/videosNews/${videosNews[0]?._id}`}>
    //         {" "}
    //         <button className="px-2 py-1 border-2 border-black rounded my-2">
    //           বিস্তারিত
    //         </button>
    //       </Link>
    //     </div>
    //     <div className="w-1/2">
    //       <div>
    //         {videosNews?.map((singleNews, idx) => (
    //           <div
    //             key={idx}
    //             className="flex items-end gap-4 shadow-lg mb-3 p-3 "
    //           >
    //             <div>
    //               <div className="relative w-full overflow-hidden ">
    //                 {" "}
    //                 <img src={bgTitleNews} alt="" className="w-[100%] " />
    //                 <p className="absolute top-[8%] left-[5%] text-white font-bold text-[12px]">
    //                   {singleNews?.title}
    //                 </p>
    //               </div>
    //               <div>
    //                 <p className="text-[11px]">
    //                   {singleNews?.description.slice(0, 100) + "..."}
    //                 </p>
    //               </div>
    //             </div>
    //             <div>
    //               <Link to={`/videosNews/${singleNews._id}`}>
    //                 {" "}
    //                 <button className="px-2 py-1 border-2 border-black rounded my-2">
    //                   বিস্তারিত
    //                 </button>
    //               </Link>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <div>
    //         <Link to={`/allVideosNews`}>
    //           <button className="w-full text-center p-2 border rounded font-bold mt-1">
    //             সব খবর
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className={`${"flex justify-start"}`}>
        <div className="relative inline-block max-w-content">
          {" "}
          <img src={bgTitle} alt="" className="w-[80%]" />
          <p className="absolute top-[30%] left-[15%] text-white font-bold text-[18px]">
            {videosNews[0]?.categoryTitle}
          </p>
        </div>
      </div>
      <div className="flex gap-6 p-5 ">
        {" "}
        <div className="w-[50%] p-4 ">
          {" "}
          <p className=" my-1 text-black font-bold  mt-2 hover:text-red-600 transition-all duration-300">
            {videosNews[0]?.title.slice(0, 50) + "..."}
          </p>
          <div className="">
            <YouTubeEmbed videoId={`${videosNews[0]?.video}`}></YouTubeEmbed>
          </div>
          <div className="my-2 flex justify-start items-center gap-1 text-[13px] font-semibold text-gray-500">
            {" "}
            <Icon icon="mdi:clock-outline" />
            <p>Oct 6, 2023</p>
          </div>
          <p className="text-[12px] text-gray-500">
            {videosNews[0]?.description.slice(0, 200) + "..."}
            <Link to={`/videosNews/${videosNews[0]?._id}`}>
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
            {videosNews?.slice(0, 4).map((singleNews, idx) => (
              <Link to={`/videosNews/${singleNews._id}`} key={idx}>
                <div className="flex items-center gap-4  mb-3 border p-2 shadow-lg">
                  <div className="overflow-hidden">
                    <div className=" w-full overflow-hidden ">
                      {" "}
                      <div className="w-full">
                        <YouTubeEmbed
                          videoId={`${singleNews?.video} `}
                          height={"h-full w-full"}
                        ></YouTubeEmbed>
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
            <Link to={`/AllvideosNews`}>
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

export default VideosNews;
