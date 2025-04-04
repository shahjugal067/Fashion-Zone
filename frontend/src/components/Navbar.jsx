import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronRight,
  Contact,
  Home,
  Library,
  MenuIcon,
  NotebookIcon,
  SearchIcon,
  ShoppingCart,
  User,
} from "lucide-react";
import { ShopContext } from "../context/ShopContext";
import SearchPage from "./SearchPage";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");

    setToken("");
    setCartItems({});
  };
  return (
    <div className="px-10 flex items-center justify-between py-2 bg-black/50 ">
      <Link to={"/"}>
        <img src="src/assets/logo1.png" width={100} alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-yellow-500">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>

        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <SearchBar />
        {/* <SearchPage /> */}
        <SearchIcon
          onClick={() => setShowSearch(true)}
          className="w-5 h-5 cursor-pointer text-yellow-600"
        />
        <div className="group relative">
          
            <User onClick={() => token ? null : navigate("/login")} className="w-5 h-5 cursor-pointer text-yellow-700" />
         {token && 
          <div className="group-hover:block hidden absolute dropdown-menu right-0 z-10 pt-4 mx-auto">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-700 bg-slate-200">
              <p onClick={()=> navigate('/myprofile')} className="cursor-pointer hover:text-green-600">My Profile</p>
              <p onClick={()=> navigate('/orders')} className="cursor-pointer hover:text-green-600">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-green-600">
                Logout
              </p>
            </div>
          </div>
          }
        </div>
        <Link to={"/cart"} className="relative">
          <ShoppingCart className=" text-yellow-500w-5 h-5 cursor-pointer" />
          <p className="absolute -right-2 -top-2 bg-yellow-500 w-4 h-4 text-white text-center rounded-full leading-4  aspect-square text-xs">
            {getCartCount()}
          </p>
        </Link>
        <MenuIcon
          onClick={() => setVisible(true)}
          className="w-5 h-5 cursor-pointer text-yellow-600 sm:hidden "
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-amber-200
            ${visible ? "w-1/4" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 text-blue-600 rotate-180 cursor-pointer" />
            <p>Back</p>
          </div>
          <NavLink
            to={"/"}
            className="py-2 pl-10 hover:bg-gray-300 w-40 hover:bg-center flex"
            onClick={() => setVisible(false)}
          >
            <Home className="w-5 h-5 mr-2 text-yellow-600" />
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/collection"}
            className="flex py-2 pl-10 hover:bg-gray-300 w-40 hover:bg-center"
          >
            <Library className="w-5 h-5 mr-2 text-yellow-600" />
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/about"}
            className="flex py-2 pl-10 hover:bg-gray-300  w-40 hover:bg-center"
          >
            <NotebookIcon className="w-5 h-5 mr-2 text-yellow-600" />
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/contact"}
            className="flex py-2 pl-10 hover:bg-gray-300  w-40 hover:bg-center"
          >
            <Contact className="w-5 h-5 mr-2 text-yellow-600" />
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
