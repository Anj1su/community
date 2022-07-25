import { useHistory, Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faFire,faArrowRight } from "@fortawesome/fontawesome-free-solid";

const TopMenu = ({ isLoggedIn, setIsLoggedIn, activeMenu }) => {
  const auth = getAuth();

  useEffect(() => {
    //사용자의 로그인 상태 변화를 관찰
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        // setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const onLogOut = () => {
    signOut(auth);
    history.replace("");
    alert("로그아웃 되었습니다.");
  };

  //로그인시 마이페이지 생성
  

  //모바일 메뉴 클릭 토글
  const [allMenuOn, setallMenuOn] = useState(false);
  const mobileMenu = useRef();

  const menuOnToggle = () => {
    if (allMenuOn) {
      mobileMenu.current.scrollIntoView({
        inline: "nearest",
        block: "end",
      });
    }
    setallMenuOn((allMenuOn) => !allMenuOn);
  };

  //이동하기
  const history = useHistory();
  const onClickBoard = (ref) => {
    setallMenuOn(false);
    history.replace(`/${ref}`);
  };


  return (
    <div className="TopMenu">
      <div className="NavBar">
        <div className="mobileLogo">
          <Link to="/">
              <div className={activeMenu === "home" ? "on" : "off"}>
                <FontAwesomeIcon icon={faFire} className="faFiree" size="sm"/>
                MODOIT
              </div>
          </Link>
        </div>
        {!isLoggedIn ? "" : (
          <div className="MyPage">
            <Link to="/" onClick={() => {alert("준비 중입니다.");}}>
              <button className="MyPageBtn">
                <FontAwesomeIcon size="1.2x" icon={faUser} className="faUser" />
                <span className="hide">　{getAuth().currentUser.email}</span>
              </button>
            </Link>
          </div>
        )}

        {!isLoggedIn ? (
          <Link to="login">
            <button className="loginBtn">
              LogIn　<FontAwesomeIcon icon={faArrowRight} className="faArrow" />
            </button>
          </Link>
        ) : (
          <button className="loginBtn" onClick={onLogOut}>
            Logout　<FontAwesomeIcon icon={faArrowRight} className="faArrow" />
          </button>
        )}
       <button className="allMenuBtn" onClick={menuOnToggle}>≡</button>
      </div>

      <div className={allMenuOn ? "allMenuOn" : "allMenuOff"} ref={mobileMenu}>
        <button onClick={() => {onClickBoard("");}}>
          🏠　홈
        </button>
        <button onClick={() => {onClickBoard("search");}}>
          검색하기
        </button>
        <button onClick={() => {onClickBoard("html");}}>
          HTML
        </button>
        <button onClick={() => {onClickBoard("css");}}>
          CSS
        </button>
        <button onClick={() => {onClickBoard("java");}}>
          JS
        </button>
        <button onClick={() => {onClickBoard("react");}}>
          REACT
        </button>
        <button onClick={() => {onClickBoard("etc");}}>
          ETC
        </button>
        {!isLoggedIn ? (
          <Link to="login">
            <button className="loginBtn">
              LogIn　<FontAwesomeIcon icon={faArrowRight} className="faArrow" />
            </button>
          </Link>
        ) : (
          <button className="loginBtn" onClick={onLogOut}>
            Logout　<FontAwesomeIcon icon={faArrowRight} className="faArrow" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopMenu;
