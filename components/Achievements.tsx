import { urlFor } from "@/lib/sanity";

const Achievements = ({ data }: any) => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <img
        src={urlFor(data.image).url()}
        alt="image"
        className="w-64 h-40 shadow-md rounded"
      />
      <h3 className="text-red-500 font-semibold text-xl text-center">
        {data.title}
      </h3>
      <p className="text-gray-100 text-center text-md font-medium">
        {data.date}
      </p>
    </div>
  );
};

export default Achievements;
