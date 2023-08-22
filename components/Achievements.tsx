const Achievements = ({ data }: any) => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <img src="" alt="image" className="w-64 h-40 shadow-md" />
      <h3 className="text-red-500 font-semibold">{data.title}</h3>
      <p className="text-red-500 ">{data.date}</p>
    </div>
  );
};

export default Achievements;
