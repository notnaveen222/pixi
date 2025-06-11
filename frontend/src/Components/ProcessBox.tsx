interface BoxProp {
  imageURL: string;
  title: string;
  description: string;
}

const ProcessBox = ({ imageURL, title, description }: BoxProp) => {
  return (
    <div className="w-[350px] md:w-[280px] lg:w-[350px] mt-10 rounded-3xl bg-[#D9D9D9]/50 px-3 h-[210px] md:h-[260px] py-8 gap-3 flex flex-col justify-center items-center">
      <img
        className="bg-[#1980e5]/30 p-2 overflow-visible rounded-full"
        src={imageURL}
        alt="process icon"
      />
      <div className="text-[22px] font-medium">{title}</div>
      <div className="desc-color text-center text-[17px]">{description}</div>
    </div>
  );
};

export default ProcessBox;
