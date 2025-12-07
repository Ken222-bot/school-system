const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded p-5 w-full">
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default StatCard;