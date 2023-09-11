import PropTypes from "prop-types";
import { FaBeer } from "react-icons/fa";
const SingleItem = ({ singleItem, handleBook, handleTimeBtn }) => {
  //   console.log(singleItem);
  const {
    title,
    cover,
    author_img,
    author,
    hashtags,
    post_date,
    release_date,
    id
  } = singleItem;
  return (
    <div>
      <img className="w-full h-80 mb-5" src={singleItem.cover}></img>
      <h3 className="text-2xl font-semibold">{singleItem.title}</h3>
      <div className="flex justify-between items-center mt-3 mb-5">
        <div className="flex item-center gap-6">
          <img
            className="w-14 h-14 rounded-full"
            src={singleItem.author_img}
          ></img>
          <div className="">
            <h3 className="font-semibold">{singleItem.author}</h3>
            <small>{singleItem.post_date}(4 Days ago)</small>
          </div>
        </div>
        <div className="flex gap-3">
          <h3>{singleItem.release_date} min read</h3>
          <button onClick={() => handleBook(singleItem)}>
            <FaBeer></FaBeer>
          </button>
        </div>
      </div>
      <button
        onClick={() =>handleTimeBtn(id, release_date)}
        className="font-semibold text-blue-600 underline mb-10"
      >
        Mark as read
      </button>
    </div>
  );
};

SingleItem.PropTypes = {
  singleItem: PropTypes.object.isRequired,
};
export default SingleItem;
