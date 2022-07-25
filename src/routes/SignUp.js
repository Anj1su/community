import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import SubHeader from "components/SubHeader";

const SignUp = () => {
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

  const onSignUp = async () => {
    if (email === "") {
      alert("아이디를 입력하세요.");
      return;
    }

    if (password === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history.replace("/");
        alert("회원가입 되었습니다.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (error.code === "auth/invalid-email") {
          alert("유효하지 않은 이메일입니다.");
        }
      });
  };

    const onPressEnter = (e) => {
    if (e.key == "Enter") {
      onSignUp();
    }
  };

  return (
    <>
      <SubHeader />
      <div className="SignUp">
        <div className="SignUpInner">
          <div className="title">회원가입</div>
          <div className="word">아이디</div>
          <input
            name="email"
            value={email}
            type="text"
            onChange ={onChange}
            placeholder="이메일 형식 (example@abc.de)"
            onKeyPress={onPressEnter}
          />
          <a className="findAccount"></a>
          <div className="word">비밀번호</div>

          <input
            name="password"
            value={password}
            type="password"
            onChange ={onChange}
            placeholder="영문+숫자 조합"
            onKeyPress={onPressEnter}
          />
          <button className="signUpBtn" onClick={onSignUp}>회원가입</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
