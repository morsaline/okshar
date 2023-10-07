import React, { useEffect, useState } from "react";
import News from "../../Components/News/News";
import VideosNews from "./VideosNews/VideosNews";

const NewsBd = () => {
  const [bdNews, setBdNews] = useState();
  const [jobNewses, setJobNewses] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("../../../public/okshar.news.json")
      .then((res) => res.json())
      .then((data) => {
        const jobNewses = data?.filter((news) => news.category === "job");
        const BdNewses = data?.filter((news) => news.category !== "job");

        setJobNewses(jobNewses);
        setBdNews(BdNewses);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const categories = {};
  bdNews?.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });

  console.log(categories);
  if (loading)
    return (
      <div className=" fixed h-full w-full flex justify-center items-center">
        <span className="text-3xl">loading</span>
      </div>
    );
  return (
    <div>
      <div className="flex gap-4 w-10/12 mx-auto">
        <div className="w-[80%]">
          <div>
            {jobNewses && (
              <div>
                <News news={jobNewses}></News>
              </div>
            )}
          </div>

          <div>
            {Object.keys(categories).map((category) => (
              <div key={category}>
                <News news={categories[category]}></News>
              </div>
            ))}
          </div>
          <div>
            <VideosNews></VideosNews>
          </div>
        </div>
        <div className="w-[20%]"></div>
      </div>
    </div>
  );
};

export default NewsBd;
