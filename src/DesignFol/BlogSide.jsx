import SideProd from "./SideProd";

const BlogSide = ({ majik, time }) => {
//   console.log(majik, release_date);
  return (
    <div className="w-1/3 bg-slate-400 ml-5 p-5">
      <div>
        <h4>All Time: {time}</h4>
      </div>
      <h4 className="text-2xl font-semibold mb-5">BlogsSide: {majik.length}</h4>
      {majik.map((singleIt) => (
        <SideProd key={singleIt} sin={singleIt} time={time}></SideProd>
      ))}
    </div>
  );
};

export default BlogSide;
