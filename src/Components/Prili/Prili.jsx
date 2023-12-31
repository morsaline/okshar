import React from "react";

const Prili = ({ data }) => {
  return (
    <div className="flex container mx-auto py-14">
      <div className="w-[70%]">
        {data?.data?.map((news, idx) => (
          <div
            key={idx}
            className="flex lg:flex-nowrap md:flex-wrap flex-wrap gap-10 mx-5 my-7"
          >
            <div className="lg:w-6/12 md:w-full">
              <img src={news?.image} className="w-full" alt="" />
            </div>
            <div className="w-full">
              <h2 className="text-xl mb-3 text-[#1F2659] font-bold">
                {news.title}
              </h2>
              <p className="text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[30%]">
        <div className="flex justify-between items-center">
          <p className="text-red-600 font-bold">Recent News</p>
          <p className="text-[#1F2659] font-bold">
            Total News : {data?.data.length}
          </p>
        </div>
        <div className="mt-3">
          {data?.data?.map((news, idx) => (
            <div
              key={idx}
              className="flex gap-2 border-b-2 border-gray-500 mb-4"
            >
              {" "}
              <img src={news?.image} alt="" className="w-[60px]" />
              <div className="p-2 flex flex-col justify-between">
                <p className="text-[11px]">{news.title}</p>
                <p className="text-[10px]">2 Feb 2023</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prili;
