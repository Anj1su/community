import React, { useState, useRef, useEffect } from "react";
import { Route } from "react-router-dom";
import MainPage from "routes/MainPage.js";
import LoginPage from "routes/LoginPage.js";
import HtmlBoard from "components/Board/HtmlBoard";
import CssBoard from "components/Board/CssBoard";
import EtcBoard from "components/Board/EtcBoard";
import JavaBoard from "components/Board/JavaBoard";
import ReactBoard from "components/Board/ReactBoard";
import SearchPage from "routes/SearchPage";
import SignUp from "routes/SignUp";
import TopMenu from "components/TopMenu";
import New from "components/New";
import db from "MyBase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    initData();
  }, []);

  const [data, setData] = useState([]);
  const [activeMenu, setActiveMenu] = useState("home");
  const dataId = useRef(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // firestore
  const initData = async () => {
    const querySnapshot = await getDocs(collection(db, "board"));
    const articleSnapshot = await getDocs(
      query(collection(db, "board"), orderBy("created_date"))
    );

    dataId.current = 0;
    articleSnapshot.forEach((doc) => {
      setData((prevData) => [doc.data(), ...prevData]);
      dataId.current += 1;
    });
  };

  // onCreate
  const onCreate = async ( contents,titleRef,urlRef,categoryRef ) => {
    const created_date = new Date().getTime();
    const newItem = {
      titleRef,
      contents,
      urlRef,
      categoryRef,
      id: dataId.current,
      created_date,
      html: 0,
      css: 0,
      java: 0,
      react: 0,
      etc: 0,
    };
    dataId.current += 1;
    await setDoc(doc(db, "board", dataId.current.toString()), newItem);
    setData([]);
    initData();
  };

  // onEdit
  const onEdit = async (targetId, emo) => {
    const targetRef = doc(db, "board", (targetId + 1).toString());

    await updateDoc(targetRef, {
      [emo]: (await getDoc(targetRef)).data()[emo] + 1,
    }).then(() => {
      setData(
        data.map((it) =>
          it.id === targetId ? { ...it, [emo]: it[emo] + 1 } : it
        )
      );
    });
  };

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <MainPage
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                onCreate={onCreate}
                postList={data}
                onEdit={onEdit}
              />
            </>
          )}
        />
        <Route exact path="/New" render={() => <New onCreate={onCreate} />}/>
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/register" render={() => <SignUp />} />
        <Route
          exact
          path="/html"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <HtmlBoard
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                postList={data}
                onEdit={onEdit}
              />
            </>
          )}
        />
        <Route
          exact
          path="/css"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <CssBoard
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                postList={data}
                onEdit={onEdit}
              />
            </>
          )}
        />
        <Route
          exact
          path="/java"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <JavaBoard
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                postList={data}
                onEdit={onEdit}
              />
            </>
          )}
        />
        <Route
          exact
          path="/react"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <ReactBoard
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                postList={data}
                onEdit={onEdit}
              />
            </>
          )}
        />
          <Route
          exact
          path="/etc"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <EtcBoard
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                postList={data}
                onEdit={onEdit}
              />
            </>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <SearchPage
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                postList={data}
                onEdit={onEdit}
              />
            </>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
