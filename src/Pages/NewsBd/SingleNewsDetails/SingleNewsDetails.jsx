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
        <div className="mx-5 shadow-md rounded-sm p-5">
          <div className=" md:w-full h-[390px]">
            <img
              src={news?.image}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
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

export default SingleNewsDetails;
