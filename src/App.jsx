import "./App.css";

import Header from "./DesignFol/Header";
import BlogSide from "./DesignFol/BlogSide";
import BlogMin from "./DesignFol/BlogMin";
import { useState } from "react";

function App() {
  const [majik, setMajik] = useState([]);
  const [time, setTime] = useState(0);

  const handleBook = (bookMarks) => {
    console.log(bookMarks);
    const newBookItems = [...majik, bookMarks];
    setMajik(newBookItems);
  };

  const handleTimeBtn = (  id , AllTime) => {
    setTime(time + AllTime);
    // console.log("dsklfj", id);
    const remove = majik.filter((time) => time.id !== id)
    setMajik(remove);
  };
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Header></Header>
        <div className="flex mt-10">
          <BlogMin
            handleTimeBtn={handleTimeBtn}
            handleBook={handleBook}
          ></BlogMin>
          <BlogSide time={time} majik={majik}></BlogSide>
        </div>
      </div>
    </>
  );
}

export default App;
