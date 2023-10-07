import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobCircular = () => {
  const [jobCircularNews, setjobCircularNews] = useState();
  // console.log(newsVideo);

  useEffect(() => {
    fetch("../../../public/okshar.news.json")
      .then((res) => res.json())
      .then((data) => {
        const jobCircularNews = data?.filter((news) => news.category === "job");

        setjobCircularNews(jobCircularNews);
      })
      .catch((err) => console.log(err));
  }, [jobCircularNews]);
  return (
    <div className="w-10/12 mx-auto">
      <div>
        {jobCircularNews?.map((news, index) => (
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
            <Link
              to={`news/${news._id}`}
              className="w-[20%] flex justify-center items-center"
            >
              <div>
                <button className="p-2 rounded border">Read more</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCircular;
