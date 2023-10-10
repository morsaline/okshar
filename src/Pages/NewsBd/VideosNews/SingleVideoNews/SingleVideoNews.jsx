import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTubeEmbed from "../../../../Components/YouTubeEmbed/YouTubeEmbed";
const SingleVideoNews = () => {
  const { _id } = useParams();
  const [news, setNews] = useState();
  console.log(_id);
  useEffect(() => {
    // Fetch the news data from the JSON file
    fetch("../../../../../public/videosNews.json")
      .then((res) => res.json())
      .then((data) => {
        // const findCategory = data?.find((news) => news.category == category);

        const singleNews = data?.find((news) => news._id == _id);
        setNews(singleNews);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);
  console.log(news);
  return (
    <div className="container mx-auto py-10">
      {news ? (
        <div className="mx-5 shadow-md rounded-sm p-5">
          <div className=" md:w-full h-[390px]">
            <YouTubeEmbed
              videoId={news?.video}
              height={"h-[400px]"}
            ></YouTubeEmbed>
          </div>
          <div className="w-full mt-5">
            <h2 className="text-3xl mb-3 leading-normal font-medium">
              {news.title}
            </h2>
            <hr className="mb-5" />
            <p className="leading-7">{news.description}</p>
          </div>
        </div>
      ) : (
        <p>News not found</p>
      )}
    </div>
  );
};

export default SingleVideoNews;
