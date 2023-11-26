import Link from "next/link";
import {
  BiHomeAlt,
  BiUser,
  BiMoney,
  BiCrown,
  BiMessage,
  BiBell,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { RiGhost2Fill } from "react-icons/ri";

const NAVIGATION_ITEMS = [
  {
    title: "Logo",
    icon: RiGhost2Fill,
  },
  {
    title: "Home",
    icon: BiHomeAlt,
  },
  {
    title: "Notificatons",
    icon: BiBell,
  },
  {
    title: "Messages",
    icon: BiMessage,
  },
  {
    title: "Matches",
    icon: BiCrown,
  },
  {
    title: "Wagers",
    icon: BiMoney,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSidebar = () => {
  return (
    <section className="sticky top-0 w-[23%] flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-3"
            href={"/${item.title.toLowerCase()}"}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Logo" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Wager
        </button>
      </div>
      <button className="rounded-full flex items-center mr-4 space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Username</div>
            <div className="text-gray-500">@Username</div>
          </div>
        </div>
        <div>
          <BiDotsHorizontalRounded />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
