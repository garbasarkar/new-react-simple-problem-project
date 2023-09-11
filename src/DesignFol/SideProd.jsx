const SideProd = ({ sin }) => {
  const { title } = sin;
  return (
    <div className="bg-gray-200 py-3 rounded-md mt-2 pl-2 shadow-md">
      <h4>{sin.title}</h4>
    </div>
  );
};

export default SideProd;
