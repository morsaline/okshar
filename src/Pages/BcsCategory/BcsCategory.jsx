import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BcsData from "./BcsData/BcsData";
import Prili from "../../Components/Prili/Prili";

const BcsCategory = () => {
  //   const [newses, setNewses] = useState([]);
  const [bcsCategory, setBcsCategory] = useState();
  const [pdfCategory, setPdfCategory] = useState();
  // console.log(newsVideo);
  const [loading, setLoading] = useState(true);
  //   const initialValue = bcsCategory?.subcategory[0];
  const { category } = useParams();
  //   console.log(initialValue);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    bcsCategory?.subcategory[0]
  );

  useEffect(() => {
    fetch("../../../public/bcs.json")
      .then((res) => res.json())
      .then((data) => {
        const bcscategoryExam = data?.find((news) => news.category == category);

        // setSelectedSubCategory(bcscategoryExam?.subcategory[0]);.
        if (bcscategoryExam.category === "বই সমাবেশ") {
          const findPdfCategory = data?.find(
            (news) => news.category === "বই সমাবেশ"
          );
          return setPdfCategory(findPdfCategory);
        }

        // console.log(data);
        setBcsCategory(bcscategoryExam);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  useEffect(() => {
    if (bcsCategory) {
      setSelectedSubCategory(bcsCategory.subcategory[0]);
    }
  }, [bcsCategory]);

  //   console.log(jobCircularNews);
  console.log(pdfCategory);
  if (loading)
    return (
      <div className=" fixed h-full w-full flex justify-center items-center">
        <span className="text-3xl">loading...</span>
      </div>
    );
  return (
    <div>
      <div>
        <div>
          {bcsCategory && (
            <div className="container mx-auto ">
              <div className="flex justify-center mt-8 ">
                {bcsCategory?.subcategory?.map((news, index) => (
                  <div key={index}>
                    {" "}
                    <div
                      onClick={() => setSelectedSubCategory(news)}
                      className={` ${
                        selectedSubCategory === news
                          ? "bg-[#1F2659]"
                          : "bg-[#C21820]"
                      } px-8 text-white font-bold py-5 border `}
                    >
                      <p>{news?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {selectedSubCategory && (
                  <BcsData
                    data={selectedSubCategory}
                    category={category}
                  ></BcsData>
                )}
              </div>
            </div>
          )}
        </div>
        <div>
          {pdfCategory && (
            <div>
              <p>bye</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BcsCategory;
