const Navbar = () => {
  return (
    <div className="border-b border-black/15 w-screen h-[80px] flex justify-between pl-10 pr-5 md:pl-15 md:pr-10 items-center">
      <div className="font-semibold text-3xl">Pixi</div>
      <div className="text-[17px] flex gap-12 items-center">
        <div className="cursor-pointer hidden md:block font-medium">
          Pricing
        </div>
        <div className="cursor-pointer hidden md:block font-medium">
          Contact
        </div>
        <button className="cursor-pointer font-medium bg-customBlue text-white py-2 px-5 rounded-full">
          Get Yours
        </button>
      </div>
    </div>
  );
};

export default Navbar;
