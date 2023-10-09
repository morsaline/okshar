import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import singleImage from "../../../assets/Images/jobNews.png";

const SingleNewsDetails = () => {
  const { _id } = useParams();
  const [news, setNews] = useState({});
  console.log(_id);
  useEffect(() => {
    // Fetch the news data from the JSON file
    fetch("../../../../../public/okshar.news.json")
      .then((res) => res.json())
      .then((data) => {
        // const findCategory = data?.find((news) => news.category == category);
        console.log(data);
        const singleNews = data?.find((news) => news._id == _id);
        setNews(singleNews);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  console.log(news);

  //   const findNews =
  //     news && news.newsCategories && news.newsCategories.length > 0
  //       ? news.newsCategories.find(
  //           (newsItem) => newsItem._id === parseInt(_id, newsItem.length)
  //         )
  //       : null;

  return (
    <div className="container mx-auto py-10">
      {news ? (
        <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap gap-10 mx-5">
          <div className="lg:w-6/12 md:w-full">
            <img src={news?.image} className="w-full" alt="" />
          </div>
          <div className="w-full">
            <h2 className="text-3xl mb-3">{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
      ) : (
        <p>News not found</p>
      )}
    </div>
  );
};

export default SingleNewsDetails;
