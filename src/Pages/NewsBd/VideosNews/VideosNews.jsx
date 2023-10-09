import React from "react";
import { useEffect, useState } from "react";
// import f from "../../../../assets"
import bgTitle from "../../../assets/bgtitle.png";
import bgTitleNews from "../../../assets/bgTitleNews.png";
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
    <div>
      <div className={`${"flex justify-end"}`}>
        <div className="relative inline-block max-w-content">
          {" "}
          <img src={bgTitle} alt="" className="w-[80%]" />
          <p className="absolute top-[30%] left-[15%] text-white font-bold text-[18px]">
            {videosNews[0]?.categoryTitle}
          </p>
        </div>
      </div>
      <div className="flex gap-1 p-5">
        {" "}
        <div className="w-1/2">
          {" "}
          {/* <img
            src={videosNews?.newses[0]?.image}
            alt=""
            className="w-full h-[400px]"
          /> */}
          <YouTubeEmbed videoId={`${videosNews[0]?.video}`}></YouTubeEmbed>
          <p className="font-bold my-1">{videosNews[0]?.title}</p>
          <p className="text-[12px]">
            {videosNews[0]?.description.slice(0, 190) + "..."}
          </p>
          <Link to={`/videosNews/${videosNews[0]?._id}`}>
            {" "}
            <button className="px-2 py-1 border-2 border-black rounded my-2">
              বিস্তারিত
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <div>
            {videosNews?.map((singleNews, idx) => (
              <div
                key={idx}
                className="flex items-end gap-4 shadow-lg mb-3 p-3 "
              >
                <div>
                  <div className="relative w-full overflow-hidden ">
                    {" "}
                    <img src={bgTitleNews} alt="" className="w-[100%] " />
                    <p className="absolute top-[8%] left-[5%] text-white font-bold text-[12px]">
                      {singleNews?.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px]">
                      {singleNews?.description.slice(0, 100) + "..."}
                    </p>
                  </div>
                </div>
                <div>
                  <Link to={`/videosNews/${singleNews._id}`}>
                    {" "}
                    <button className="px-2 py-1 border-2 border-black rounded my-2">
                      বিস্তারিত
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Link to={`/allVideosNews`}>
              <button className="w-full text-center p-2 border rounded font-bold mt-1">
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
