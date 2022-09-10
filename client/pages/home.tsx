import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { AiFillHome } from "react-icons/ai";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdLocalGroceryStore,
  MdPaid,
} from "react-icons/md";
import { BiTestTube } from "react-icons/bi";

const Menus = [
  {
    title: "Inventory",
    icon: <MdLocalGroceryStore />,
    submenu: true,
    submenuItems: [{ title: "feature 1" }, { title: "feature 2" }],
  },
  {
    title: "No dues",
    submenu: true,
    icon: <MdPaid />,
    submenuItems: [{ title: "feature 1" }, { title: "feature 2" }],
  },
  {
    title: "Lab Management",
    submenu: true,
    icon: <BiTestTube />,
    submenuItems: [
      { title: "feature 1" },
      { title: "feature 2" },
      { title: "feature 3" },
    ],
  },
];

const Home = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState<boolean[]>(
    new Array(Menus.length).fill(false)
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-row items-center h-[calc(100vh-65px)] relative bg-primary">
        <MdKeyboardArrowLeft
          className={`bg-primary2 text-offwhite shadow text-3xl duration-300 rounded-full cursor-pointer absolute top-[28px] ${open? 'left-[20%]' : 'left-[4.5%]'} ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div
          className={`h-full overflow-hidden p-5 pt-8 ${
            open ? "w-80" : "w-20"
          } duration-300 relative`}
        >
          {/* sidebar */}

          <div className="inline-flex pb-2">
            <AiFillHome className="text-2xl block float-left ml-2 text-white mr-3" />

            <h1
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Menu
            </h1>
          </div>
          <div className="bg-offwhite h-[0.5px] w-full"></div>

          <ul className="pt-1">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className="text-white text-medium flex items-center gap-x-4 cursor-pointer p-2
                           hover:bg-primary4 rounded-md mt-2"
                  onClick={() =>
                    setSubmenuOpen((prev) => {
                      let newArray = [...prev];
                      newArray[index] = !prev[index];
                      return [...newArray];
                    })
                  }
                >
                  <span className="text-2xl block float-right">
                    {menu.icon ? menu.icon : <BiTestTube />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <MdKeyboardArrowDown
                      className={`${submenuOpen[index] && "rotate-180"}`}
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen[index] && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-200 text-medium flex items-center gap-x-4 cursor-pointer p-2
                                    px-7 hover:bg-primary4 rounded-md"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="h-full flex-1 overflow-hidden rounded-l-3xl bg-offwhite">
          {/* main */}
          <div className="flex flex-row ml-8 font-bold text-3xl mt-8">
            <span className="text-primary2 mr-2">Hello, </span>
            <span>Samarth!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
