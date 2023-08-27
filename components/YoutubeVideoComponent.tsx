const YoutubeVideoComponent = ({ data }: any) => {
  return (
    <div className="flex flex-col space-y-8 justify-center items-center p-8">
      <iframe
        className="sm:w-[600px] sm:h-[315px] w-[90%] h-auto"
        src={data.videoSrc}
        title={data.videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="text-red-600 text-2xl my-4 font-semibold italic text-center">
        {data.text}
      </h1>
      <span className="text-gray-200 text-2xl font-medium uppercase italic text-center">
        {data.tagText}
      </span>
    </div>
  );
};

export default YoutubeVideoComponent;
