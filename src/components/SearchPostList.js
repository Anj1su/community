import { useState, useEffect } from "react";
import PostItem from "components/PostItem.js";

const SearchPostList = ({ postList, onEdit, searchText }) => {
  const [resultValue, setResultValue] = useState(0);
  const [data, setData] = useState([]);
  let tempData = [];
  let tempValue = 0;

  useEffect(() => {
    for (let i = 0; i < postList.length; i++) {
      if (postList[i].input.includes(searchText)) {
        tempData.push(postList[i]);
        tempValue++;
      }
    }
    setData(tempData);
    setResultValue(tempValue);
  }, [searchText]);

  return (
    <div className="PostList">
      {searchText !== null ? (
        <>
          <div className="resultInfo">
            <div style={{marginTop:"10px"}}>준비중입니다.</div>
            {/* <a>{resultValue}</a>개의 검색 결과가
            존재합니다. */}
          </div>
        </>
      ) : (
        <></>
      )}
      <span className="line"></span>

      {searchText !== null ? (
        <div>
          {data.map((it) => (
            <PostItem key={it.id} {...it} onEdit={onEdit} />
          ))}
        </div>
      ) : ""}
    </div>
  );
};

SearchPostList.defaultProps = {
  postList: [],
};

export default SearchPostList;
