import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import YouTubeEmbed from "../../../../Components/YouTubeEmbed/YouTubeEmbed";
import ReactPaginate from "react-paginate";

const AllVideosNews = () => {
  const [allNews, setAllNews] = useState([]);
  const { category } = useParams();
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  // {''''''''''''''react paginataion start'''''''''''''''''}
  // const itemsPerPage = 7;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allNews.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allNews.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allNews.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // {''''''''''''''react paginataion end'''''''''''''''''}

  console.log(allNews);
  useEffect(() => {
    fetch("../../../../../public/videosNews.json") // Update the path to the JSON file
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data); // Store the fetched data in state
      })
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="grid lg:grid-cols-2 gap-5">
        {currentItems?.map((news, index) => (
          <>
            <div className="w-11/12 border rounded shadow-lg transition-all duration-200 p-5">
              <h2 className="text-xl mb-4 font-medium hover:text-[#C21820] transition-all duration-200">
                {news?.title}
              </h2>
              <div
                key={index}
                className="flex xl:items-start items-center justify-between xl:flex-nowrap lg:flex-wrap md:flex-wrap flex-wrap gap-10 mx-auto "
              >
                <div className=" md:w-full ">
                  <YouTubeEmbed
                    videoId={news?.video}
                    height={"h-[300px]"}
                  ></YouTubeEmbed>
                </div>
                <div className="w-full">
                  <p className="text-justify leading-7 text-sm">
                    {news.description?.slice(0, 220) + "... "}
                    <Link
                      to={`videosNews/${news._id}`}
                      className=" items-center font-semibold text-[#1F2659] hover:opacity-90 text-[15px]"
                    >
                      বিস্তারিত
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex gap-2 items-center mt-3">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="paginationBttns"
          previousLinkClassName="prevBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationdisabled"
          activeClassName="paginationActive"
          // pageLinkClassName="paginationBttn"
        />
      </div>
    </div>
  );
};

export default AllVideosNews;
