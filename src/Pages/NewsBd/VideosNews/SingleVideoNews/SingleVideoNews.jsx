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
        <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap gap-10 mx-5">
          <div className="lg:w-6/12 md:w-full">
            <YouTubeEmbed videoId={`${news.video}`}></YouTubeEmbed>
          </div>
          <div className="w-full">
            <h2 className="text-3xl mb-3">{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
      ) : (
        <p>News not found news</p>
      )}
    </div>
  );
};

export default SingleVideoNews;
