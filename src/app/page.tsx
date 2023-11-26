import LeftSidebar from "./components/LeftSidebar";
import Timeline from "./components/Timeline";
import RightSidebar from "./components/RightSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[90vw] w-full h-full flex relative">
        <LeftSidebar />
        <Timeline />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
