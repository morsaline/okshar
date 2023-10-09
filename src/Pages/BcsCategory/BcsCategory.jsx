import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BcsData from "./BcsData/BcsData";
// import Prili from "../../Components/Prili/Prili";

import pdfImage from "../../assets/Home/pdf.png";

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
  const [selectedPdfSubCategory, setSelectedPdfSubCategory] = useState(
    pdfCategory?.subcategory[0]
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
    if (pdfCategory) {
      setSelectedPdfSubCategory(pdfCategory.subcategory[0]);
    }
  }, [bcsCategory, pdfCategory]);

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
                      } px-6 text-white font-bold py-3 border `}
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
              <div className="flex justify-center mt-8 ">
                {pdfCategory?.subcategory?.map((news, index) => (
                  <div key={index}>
                    {" "}
                    <div
                      onClick={() => setSelectedPdfSubCategory(news)}
                      className={` ${
                        selectedPdfSubCategory === news
                          ? "bg-[#1F2659]"
                          : "bg-[#C21820]"
                      } px-6 text-white font-bold py-3 border `}
                    >
                      <p>{news?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap gap-10 mx-auto border rounded mt-7 p-4 w-10/12 ">
                <div className="w-[20%]">
                  <img src={pdfImage} className="w-full" alt="" />
                </div>
                <div className="w-[50%]">
                  <h2 className="text-3xl mb-3 font-bold uppercase">
                    43 Bsc eaxmaination paper
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, incidunt natus repellendus similique fuga est
                    laudantium pariatur itaque tempore exercitationem.
                  </p>
                </div>
                <div className="w-[30%] flex justify-center items-center">
                  {" "}
                  <button className="bg-blue-500 text-white font-bold p-2  rounded">
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BcsCategory;
