import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/fontawesome-free-solid";
import SubHeader from "components/SubHeader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    const {name,value} = event.target;
    if ( name === "email") {
        setEmail(value);
    } else if( name === "password"){
        setPassword(value);
    }
  }

  const onSignIn = async () => {
    if (email === "") {
      alert("아이디를 입력하세요.");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      });
  };

  const onPressEnter = (e) => {
    if (e.key == "Enter") {
      onSignIn();
    }
  };


  return (
    <>
      <SubHeader />
      <div className="LoginPage">
        <div className="LoginInner">
          <Link to="/">
            <div className="logo">
              <FontAwesomeIcon icon={faFire} className="faFiree" size="sm"/>
              MoDoIt
            </div>
          </Link>
          <input
            name="email"
            type="text"
            placeholder="아이디"
            value={email}
            onChange ={onChange}
            onKeyPress={onPressEnter}
          />
          <input
            name="password"
            type="password" 
            placeholder="비밀번호"
            value={password}
            onChange ={onChange}
            onKeyPress={onPressEnter}
          />
          <button className="loginBtn" onClick={onSignIn}>로그인</button>
          <a className="findAccount">아이디/비밀번호 찾기</a>
          <div className="signUpText">
            아직 계정이 없으신가요?
            <Link to="register">
              <a>회원가입</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
