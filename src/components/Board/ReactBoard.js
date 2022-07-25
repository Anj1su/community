import React, { useEffect } from "react";
import SideMenu from "components/SideMenu";
import PostList from "components/PostList";

const ReactBoard = ({ activeMenu, setActiveMenu, postList, onEdit }) => {
    useEffect(() => {
      setActiveMenu("react");
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <>
        <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className="content">
          <div className="reactBoard">
            <div className="title">
              React
            </div>
            <span className="line"></span>
            <PostList postList={postList} onEdit={onEdit} classifyFlag={"react"} />
          </div>
        </div>
      </>
    );
  };

export default ReactBoard;