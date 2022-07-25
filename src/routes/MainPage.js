import React, { useEffect, useRef, useState } from "react";
import SideMenu from "components/SideMenu";
import PostList from "components/PostList.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const MainPage = ({ 
  isLoggedIn,
  activeMenu, 
  setActiveMenu,
  onCreate,
  postList,
  onEdit
}) => {
  useEffect(() => {
    setActiveMenu("home");
  }, []);
   
  return (
    <>
      <SideMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="content">
        <div className="MainPage">
          {!isLoggedIn ? (
            <>
              <div className="title">
                MoDoIt Board <span className="sub-title">※ 로그인 후 작성이 가능합니다</span>
              </div> 
            </>
            ) : (
              <div className="title">MoDoIt Board</div>
            )}
                {!isLoggedIn ? "" :
            <Link to="/new" onCreate={onCreate}>
              <button className="newCreat">
                <FontAwesomeIcon icon={faPenToSquare} className="faPen"/> 
                <span>작성하기</span>
              </button>
            </Link>
          }
          <span className="line"></span>
          <PostList
            postList={postList}
            onEdit={onEdit}
            classifyFlag={"unclassify"}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
