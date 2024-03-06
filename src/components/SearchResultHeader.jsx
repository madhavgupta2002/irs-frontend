import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/search-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedItem, setSelectedItem] = useState("All");
  const { setImageSearch } = useContext(Context);
  useEffect(() => {
    return () => setImageSearch(false);
  }, []);
  const clickHandler = (menuItem) => {
    let isTypedImages = menuItem.name === "Images";
    setSelectedItem(menuItem.name);
    setImageSearch(isTypedImages ? true : false);
  };
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center stick top-0">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img src={Logo} className="hidden md:block w-[92px] mr-10" />
          </Link>
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {/* {menu.map((item, index) => (
          <span
            key={index}
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
              selectedItem === item.name ? "text-[#2921ff]" : ""
            }`}
            onClick={() => clickHandler(item)}
          >
            <span className="hidden md:block mr-2">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
            {selectedItem === item.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73b8] bottom-1 left-[10px]" />
            )}
          </span>
        ))} */}
      </div>
    </div>
  );
};

export default SearchResultHeader;
