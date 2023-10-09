import React, { useEffect, useState } from "react";
import News from "../../Components/News/News";
import VideosNews from "./VideosNews/VideosNews";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import productImage from "../../assets/Home/book1.png";

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
        <div className="w-[20%]">
          <div className="sticky top-3">
            <Link to="/shop">
              {" "}
              <div className="relative product cursor-pointer lg:border p-5 rounded-md  hover:text-white hover:bg-gradient-to-t from-[#1d1c3a] from-0% to-transparent to-95% transition-all duration-300 ease-in-out">
                <div className="p-5">
                  <img
                    src={productImage}
                    className="w-full h-auto object-contain max-w-full max-h-60"
                    alt="Book 1"
                  />
                </div>
                <h3 className="text-xl font-medium">Product1</h3>

                <div className="flex justify-between items-center gap-5">
                  <div className="flex gap-3 items-center">
                    <del className="text-para_texts product_oldPrice">225৳</del>
                    <span className="text-xl">122৳</span>
                  </div>
                  <button className="product_btn hover:bg-secondary font-semibold  border border-black hover:border-primary text-black mt-5 rounded-md py-2 px-5 transition-all duration-300 ease-in-out">
                    Add to Cart
                  </button>
                </div>
                <div className="flex productCart gap-5 flex-col absolute right-0 top-36">
                  <Link to="">
                    <Icon
                      icon="basil:shopping-cart-solid"
                      className=" text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl"
                    />
                  </Link>
                  <Link to="">
                    <Icon
                      icon="mdi:heart"
                      className=" text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl"
                    />
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBd;
