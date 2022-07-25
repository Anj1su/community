import React, { useEffect, useState, useRef } from "react";
import SideMenu from "components/SideMenu";
import SearchPostList from "components/SearchPostList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

const SearchPage = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("search");
  }, []);

  const textBox = useRef();
  const [searchText, setSearchText] = useState(null);

  const onSearch = () => {
    setSearchText(textBox.current.value);
  };

  const onPressEnter = (e) => {
    if (e.key == "Enter") {
      onSearch();
    }
  };

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="SearchPage">
          <div className="searchArea">
            <input
              type="text"
              placeholder="검색할 내용을 입력하세요."
              ref={textBox}
              onKeyPress={onPressEnter}
            />
            <button className="searchBtn" onClick={onSearch}>
              <FontAwesomeIcon icon={faSearch} size="2x" className="faSearch" />
            </button>
          </div>
          <SearchPostList
            onEdit={onEdit}
            searchText={searchText}
          />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
