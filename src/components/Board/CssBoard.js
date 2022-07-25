import React, { useEffect } from "react";
import SideMenu from "components/SideMenu.js";
import PostList from "components/PostList.js";

const CssBoard = ({ activeMenu, setActiveMenu,postList,onEdit }) => {
  useEffect(() => {
    setActiveMenu("css");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="CssBoard">
          <div className="title">
            CSS
          </div>
          <span className="line"></span>
          <PostList
            postList={postList}
            onEdit={onEdit}
            classifyFlag={"css"}
          />
        </div>
      </div>
    </>
  );
};

export default CssBoard;
