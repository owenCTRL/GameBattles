import LeftSidebar from "./components/LeftSidebar";
import Timeline from "./components/Timeline";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[90vw] w-full h-full flex relative">
        <LeftSidebar />
        <Timeline />
        <section className="w-[50%] mt-2 flex flex-col items-stretch h-full px-6">
          <div className="backdrop-blur bg-black/10 sticky top-0">
            <div className="relative w-full h-full">
              <input
                id="searchBox"
                type="text"
                placeholder="Search GameBattles"
                className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
              />
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
              >
                <BsSearch className="w-5 h-5" />
              </label>
            </div>
          </div>
          <div>
            <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
              <h3 className="font-bold text-2xl my-4 p-4">Rankings</h3>
              <div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="hover:bg-white/10 p-4">
                    <div className="font-bold text-lg">Team ${i + 1}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
              <h3 className="font-bold text-2xl my-4 p-4">Leagues</h3>
              <div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="hover:bg-white/10 p-4">
                    <div className="font-bold text-lg">League {i + 1}</div>
                    <div className="text-xs text-neutral-400">35.4k</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
