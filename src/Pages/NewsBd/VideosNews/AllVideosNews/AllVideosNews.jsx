import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import YouTubeEmbed from "../../../../Components/YouTubeEmbed/YouTubeEmbed";

const AllVideosNews = () => {
  const [allNews, setAllNews] = useState([]);
  const { category } = useParams();

  console.log(allNews);
  useEffect(() => {
    fetch("../../../../../public/videosNews.json") // Update the path to the JSON file
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data); // Store the fetched data in state
      })
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <div className="w-10/12 mx-auto">
      <div>
        {allNews?.map((news, index) => (
          <div key={index} className="flex gap-2 justify-between mb-5 border">
            {" "}
            <div className="w-[30%]">
              <YouTubeEmbed videoId={`${news.video}`}></YouTubeEmbed>
            </div>
            <div className="w-[50%]  flex justify-center items-center">
              <div>
                <p className="mb-5">{news.title}</p>
                <p>{news.description?.slice(0, 200) + "..."}</p>
              </div>
            </div>
            <div className="w-[20%] flex justify-center items-center ">
              <Link to={`/news/${news._id}`}>
                {" "}
                <button className="px-2 py-1 border-2 border-black rounded my-2">
                  বিস্তারিত
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVideosNews;
