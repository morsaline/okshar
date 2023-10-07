import React from "react";
import Prili from "../../../Components/Prili/Prili";
import Likhito from "../../../Components/Likhito/Likhito";
import Vaiva from "../../../Components/Vaiva/Vaiva";
import { useParams } from "react-router-dom";

const BcsData = ({ data, category }) => {
  //   const { category } = useParams();
  //   console.log(category);
  return (
    <div>
      <div>
        {data?.name == "প্রিলিমিনিয়ার" && (
          <div>
            <Prili data={data}></Prili>
          </div>
        )}
      </div>
      <div>
        {data?.name == "লিখিত" && (
          <div>
            <Prili data={data}></Prili>
          </div>
        )}
      </div>
      <div>
        {data?.name == "ভাইভা" && (
          <div>
            <Prili data={data}></Prili>
          </div>
        )}
      </div>
    </div>
  );
};

export default BcsData;
