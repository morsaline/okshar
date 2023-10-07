import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AllNews = () => {
  const [allNews, setAllNews] = useState([]);
  const { category } = useParams();

  console.log(allNews);
  useEffect(() => {
    fetch("../../../../public/okshar.news.json") // Update the path to the JSON file
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data?.filter((news) => news.category === category)); // Store the fetched data in state
      })
      .catch((err) => console.log(err));
  }, [category]); // Include category in the dependency array

  return (
    <div className="w-10/12 mx-auto">
      <div>
        {allNews?.map((news, index) => (
          <div key={index} className="flex gap-2 justify-between mb-5 border">
            {" "}
            <div className="w-[30%]">
              <img src={news?.image} alt="" />
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

export default AllNews;
