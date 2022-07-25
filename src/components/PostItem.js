import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PostItem = ({
  titleRef,
  contents,
  urlRef,
  categoryRef,
  id,
  created_date,
  onEdit,
}) => {
  const increaseEmotion = (emotion) => {
    onEdit(id, emotion);
  };

  // 카피하기
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      // 사용 브라우저가 Clipboard API를 지원하는 경우
      return await navigator.clipboard.writeText(text);
    } else {
      // 지원하지 않는 경우
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(urlRef)
    .then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className="PostItem">
      <div className="Tag">{categoryRef}</div>
      <div className="titleCont">
        <div className="ContList">
          <div className="postTitle"> {titleRef}</div>
          <button className="editBtn" onClick={() => {alert("준비 중입니다.");}}>수정하기</button>
          <button className="deleteBtn" onClick={() => {alert("준비 중입니다.");}}>삭제하기</button>
          <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>

        <div className="postCont">
          <div className="account">
            <span></span>
            <div className="contents">{contents}</div>
          </div>
          <div className="url">
            <form>
              <input type="text" value={urlRef} readOnly />
              <button onClick ={handleCopyClick}>
                {isCopied ? "Copied!" : "Copy"}
              </button>
              <a href={urlRef} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="urlFontawesome"/> 공유페이지 새창으로 열기
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
