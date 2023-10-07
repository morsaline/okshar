import React from "react";
import { Link } from "react-router-dom";
import bgTitle from "../../assets/bgtitle.png";
import bgTitleNews from "../../assets/bgTitleNews.png";

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
      <div className="flex gap-1 p-5">
        {" "}
        <div className="w-1/2">
          {" "}
          <img src={news[0]?.image} alt="" className="w-full h-[400px]" />
          <p className="font-bold my-1">
            {news[0]?.title.slice(0, 50) + "..."}
          </p>
          <p className="text-[12px]">
            {news[0]?.description.slice(0, 200) + "..."}
          </p>
          <Link to={`/news/${news[0]?._id}`}>
            {" "}
            <button className="px-2 py-1 border-2 border-black rounded my-2">
              বিস্তারিত
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <div>
            {news?.map((singleNews, idx) => (
              <div
                key={idx}
                className="flex items-end gap-4 shadow-lg mb-3 p-3 "
              >
                <div>
                  <div className="relative w-full overflow-hidden ">
                    {" "}
                    <img src={bgTitleNews} alt="" className="w-[100%] " />
                    <p className="absolute top-[8%] left-[5%] text-white font-bold text-[12px]">
                      {singleNews?.title.slice(0, 30) + "..."}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px]">
                      {singleNews?.description.slice(0, 100) + "..."}
                    </p>
                  </div>
                </div>
                <div>
                  <Link to={`/news/${singleNews._id}`}>
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
            <Link to={`allNews/${news[0]?.category}`}>
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

export default News;
