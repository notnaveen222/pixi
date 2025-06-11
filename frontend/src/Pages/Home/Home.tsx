import Navbar from "../../Components/Navbar";
import ProcessBox from "../../Components/ProcessBox";
import strip from "../../assets/strip1.png";
import uploadIcon from "../../assets/upload.png";
import wandIcon from "../../assets/wand.png";
import deliverIcon from "../../assets/truck.png";
import PricingCard from "../../Components/PricingCard";
import FaqBox from "../../Components/FaqBox";

const Home = () => {
  const processDescriptions = [
    "Upload your favourite photos from your computer, phone, or social media accounts.",
    "Choose from various templates, text, and customize the layout of your photo strip.",
    "Place your order and receive high-quality printed photo strips delivered to your door.",
  ];
  const planFeatures = {
    basic: [
      "3 photos per strip",
      "Standard templates",
      "Basic Filters",
      "Digital Copy Included",
    ],
    premium: [
      "4 photos per strip",
      "Premium Templates",
      "Advance Filters",
      "Custom Text",
      "2 Printed Copies",
    ],
    party: [
      "5 photos per strip",
      "All premium features",
      "Priority Shipping",
      "Digit Album included",
    ],
  };
  const FAQs = [
    {
      title: "How long does shipping take ?",
      description:
        "Standard Shipping takes 3-5 business days. premium and party packs include priority shipping ",
    },
    {
      title: "How long does shipping take ?",
      description:
        "Standard Shipping takes 3-5 business days. premium and party packs include priority shipping ",
    },
    {
      title: "How long does shipping take ?",
      description:
        "Standard Shipping takes 3-5 business days. premium and party packs include priority shipping ",
    },
  ];
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col-reverse md:flex mb-12 lg:mb-28  md:flex-row px-10 lg:px-[10vw] w-full mt-5">
          <div className=" md:w-1/2 border overflow-hidden mb-5 sm:mb-0 flex justify-center border-black/15 rounded-2xl">
            <div className="flex relative">
              <img
                className="h-96 relative left-[43px] -bottom-9 rotate-z-[9deg]"
                src={strip}
                alt="strip"
              />
              <img
                className="absolute -bottom-5  -left-10 -rotate-z-[10deg] h-96"
                src={strip}
                alt="strip"
              />
            </div>
          </div>
          <div className="flex flex-col mb-5 sm:mb-0 justify-center gap-4 md:w-1/2">
            <div className="text-[55px]/15 font-semibold text-center">
              Photo Strips,
              <br /> delivered to your <br />
              door
            </div>
            <button className="cursor-pointer text-white bg-customBlue rounded-lg w-1/2 mx-auto h-10 font-medium text-[20px]">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:px-[15vw] w-full ">
          <div className="text-center text-[36px] font-medium">
            How it works
          </div>
          <div className="text-center desc-color text-lg">
            creating your custom photo strips is easy with our simple 3-step
            process
          </div>
          <div className="flex mb-10 sm:mb-0 flex-col items-center md:items-baseline   md:flex-row justify-center md:gap-x-8 lg:gap-x-16">
            <ProcessBox
              imageURL={uploadIcon}
              title="1. Upload Photo"
              description={processDescriptions[0]}
            />
            <ProcessBox
              imageURL={wandIcon}
              title="2. Customize Design"
              description={processDescriptions[1]}
            />
            <ProcessBox
              imageURL={deliverIcon}
              title="3. Order and Recieve"
              description={processDescriptions[2]}
            />
          </div>
          <div className="text-center">
            <button className="font-medium text-17 px-5 py-2 bg-[#D9D9D9]/70 hover:bg-[#D9D9D9] transition-all duration-150 my-8 rounded-full cursor-pointer">
              Start Creating Now
            </button>
          </div>
        </div>
        <div className="text-center text-[36px] font-medium mb-8">Pricing</div>
        <div className="flex lg:px-[10vw] justify-center w-full px-10 gap-10 mb-20 items-center ">
          <PricingCard
            plan="Basic"
            price="₹200"
            description="perfect for individuals"
            features={planFeatures["basic"]}
          />
          <PricingCard
            plan="Premium"
            price="₹250"
            description="perfect for groups"
            features={planFeatures["premium"]}
            isPremium={true}
          />
          <PricingCard
            plan="Party Pack"
            price="₹300"
            description="perfect for lot of people"
            features={planFeatures["party"]}
          />
        </div>
        <div className="text-center text-[36px] font-medium mb-2">
          Frequently Asked Questions
        </div>
        <div className="text-center desc-color opacity-85 text-[20px] font-medium mb-10">
          Find answers to common question asked about our service
        </div>
        <div className="flex flex-col gap-y-6 items-center mb-20">
          <FaqBox
            title={FAQs[0]["title"]}
            description={FAQs[0]["description"]}
          />
          <FaqBox
            title={FAQs[1]["title"]}
            description={FAQs[1]["description"]}
          />
          <FaqBox
            title={FAQs[2]["title"]}
            description={FAQs[2]["description"]}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
