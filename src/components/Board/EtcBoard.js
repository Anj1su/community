import React, { useEffect } from "react";
import SideMenu from "components/SideMenu.js";
import PostList from "components/PostList.js";

const EtcBoard = ({ activeMenu, setActiveMenu,postList,onEdit }) => {
  useEffect(() => {
    setActiveMenu("etc");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="EtcBoard">
          <div className="title">
            ETC
          </div>
          <span className="line"></span>
          <PostList
            postList={postList}
            onEdit={onEdit}
            classifyFlag={"etc"}
          />
        </div>
      </div>
    </>
  );
};

export default EtcBoard;
