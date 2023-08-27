const YoutubeVideoComponent = ({ data }: any) => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <iframe
        className="sm:w-[600px] sm:h-[315px] w-[80%] h-[300px]"
        src={data.videoSrc}
        title={data.videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <span>{data.tagText}</span>
      <p>{data.text}</p>
    </div>
  );
};

export default YoutubeVideoComponent;
