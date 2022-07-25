import React, { useEffect } from "react";
import SideMenu from "components/SideMenu.js";
import PostList from "components/PostList.js";

const HtmlBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("html");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="htmlBoard">
          <div className="title">
            HTML
          </div>
          <span className="line"></span>
          <PostList postList={postList} onEdit={onEdit} classifyFlag={"html"} />
        </div>
      </div>
    </>
  );
};

export default HtmlBoard;
