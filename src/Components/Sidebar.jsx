import { useState } from "react";
import {
  MdHome,
  MdContactPage,
  MdShoppingCart,
  MdOutlineMenu,
} from "react-icons/md";
import {  NavLink } from "react-router-dom";

const NavData = [
  {
    id: 1,
    to: "/",
    text: "Home",
    icon: <MdHome />,
  },
  {
    id: 2,
    to: "/about",
    text: "About",
    icon: <MdContactPage />,
  },
  {
    id: 3,
    to: "/cart",
    text: "Cart",
    icon: <MdShoppingCart />,
  },
];

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className={`h-screen ${isOpen ? "w-60" : "w-16"} bg-gray-300 `}>
      <div className="flex  flex-col p-4 mt-20">
        <div className="logo flex flex-row justify-center items-center">
          {isOpen && <h2 className="text-2xl font-semibold  ">Logo</h2>}
          <span>
            <MdOutlineMenu
              className="text-4xl ml-2 "
              onClick={() => setOpen(!isOpen)}
            />
          </span>
        </div>
        {NavData.map((item) => (
          <div
            className=" text-black mt-10   "
            key={item.id}>
            <NavLink
            
              to={item.to}
              
              className="flex flex-row justify-center items-center  rounded-md p-2 hover:bg-slate-400  hover:shadow-lg  aria-[current=page]:text-orange-400   ">
              <span className="text-4xl mr-4">{item.icon}</span>
              {isOpen && <h2 className="">{item.text}</h2>}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
