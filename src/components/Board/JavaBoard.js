import React, { useEffect } from "react";
import SideMenu from "components/SideMenu.js";
import PostList from "components/PostList.js";

const JavaBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
  useEffect(() => {
    setActiveMenu("java");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="javaBoard">
          <div className="title">
            Java Script
          </div>
          <span className="line"></span>
          <PostList postList={postList} onEdit={onEdit} classifyFlag={"java"} />
        </div>
      </div>
    </>
  );
};

export default JavaBoard;
