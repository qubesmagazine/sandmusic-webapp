import { assetIcon } from "../assets/index";

const SideBar = () => {
  return (
    <div className="w-[20%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assetIcon.home_icon} className="w-5 h-5" alt="home" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assetIcon.searchIcon} className="w-5 h-5" alt="search" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assetIcon.stack} alt="stack icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assetIcon.right} alt="arrow" />
            <img className="w-5" src={assetIcon.plus} alt="plus" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">its easy we will help you</p>
          <button className="px-4 py-1.5 text-[15px] text-black rounded-full mt-4 bg-blue-500">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Find more podcast to follow</h1>
          <p className="font-light">We will keep you updated </p>
          <button className="px-4 py-1.5 text-[15px] text-black rounded-full mt-4 bg-blue-500">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
