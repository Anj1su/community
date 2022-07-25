import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import SubHeader from "./SubHeader";

const New = ({onCreate}) => {
  const history = useHistory();
  const contents = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const urlRef = useRef();

  const [warp, setWarp] = useState({
    state: "",
    title: "",
    url: "",
    category: "",
  })

  const { state, title, url, category } = warp;

  const handleChangeState = (e) => {
    const { name , value } = e.target;
    setWarp({
      ...warp, //기존의 warp 객체를 복사한뒤
      [name]: value //name 키를 가진 값을 value로 설정
    });
  };

  const handleSubmit = () => {
    if (state.length < 10) {
      alert("내용은 10글자 이상으로 작성해주세요.");
      contents.current.focus();
      return;
    }

    onCreate( state, title, url, category ); // 여기에 value 값 보내기
    setWarp({
      state: "",
      title: "",
      url: "",
      category: ""
    });
    history.replace("/");
  };

  //카테고리 
  return(
    <>
      <SubHeader />
      <div className="NewPage">
        <div className="NewInner">
          <div className="Area">
            <div className="title">제목</div>
            <input 
              type="text"
              name="title"
              value={title}
              ref={titleRef}
              onChange={handleChangeState}
              placeholder="제목을 입력해주세요"
            />
          </div>
          <div className="Area">
            <div className="title">카테고리</div>
              <select
                name="category"
                value={category}
                onChange={handleChangeState}
                ref={categoryRef}
              >
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JS</option>
                <option value="React">React</option>
                <option value="ETC">기타</option>
              </select>
          </div>
          <div className="Area">
            <div className="title">공유할 링크 (URL)</div>
            <input
              type="text"
              name="url"
              value={url}
              ref={urlRef}
              onChange={handleChangeState}
              placeholder="URL을 입력해주세요."
            />
          </div>
          <div className="Area">
            <div className="title">상세정보</div>
            <textarea
              name="state"
              ref={contents}
              value={state}
              onChange={handleChangeState}
              maxLength={300}
              placeholder="내용을 10글자 이상으로 작성해주세요."
            />
            <div className="letters">{state.length} / 300 자</div>
            <button className="submitBtn" onClick={handleSubmit}>
              작성완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;