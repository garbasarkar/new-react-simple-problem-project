import { useState } from "react";
import { useEffect } from "react";
import SingleItem from "./SingleItem";

const BlogMin = ({ itemData, handleBook, handleTimeBtn }) => {
  const [data, setData] = useState([]);
  //   console.log(itemData);
  useEffect(() => {
    fetch(`Fack.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-2/3">
      {data.map((data) => (
        <SingleItem
          key={data.id}
          singleItem={data}
          handleBook={handleBook}
          handleTimeBtn={handleTimeBtn}
        ></SingleItem>
      ))}
    </div>
  );
};

export default BlogMin;
