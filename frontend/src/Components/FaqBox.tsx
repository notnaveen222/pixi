interface FAQProp {
  title: string;
  description: string;
}
const FaqBox = ({ title, description }: FAQProp) => {
  return (
    <div className="px-8 rounded-2xl  bg-[#F6F6F6] font-medium w-[40vw] shadow-md">
      <div className="mt-5 mb-4 text-[20px]">{title}</div>
      <div className="mb-5 text-17 opacity-85 text-[#6E6E6E]">
        {description}
      </div>
    </div>
  );
};

export default FaqBox;
