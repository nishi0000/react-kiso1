import axios from "axios";
import { useState } from "react";
import "../css/newthread.css"
import { useNavigate } from "react-router-dom";

export const NewThread = () => {

  const [threadTitlePost, setThreadTitlePost] = useState(""); //スレッドを作成するためのstate
  const threadTitleSet = {
    title: threadTitlePost,
  };
  const navigate = useNavigate();

      //スレッドタイトルをポストする
      const onClickTitle = () => {
        if (threadTitleSet.title === "") {
          alert("タイトルを入力してください。");
        } else {
          axios.post(
            "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
            threadTitleSet
          );
          setThreadTitlePost("");
          // navigate("/");
    
        }
      };


  return (
    <>
      <div className="newthread">
        <h2>スレッド新規作成</h2>
        <input
          className="inputtitle"
          placeholder="スレッドタイトル"
          value={threadTitleSet.title}
          onChange={(event) => {
            setThreadTitlePost(event.target.value);
          }}
        ></input>
        <div className="inputcontainer">
          <a className="inputlink" href="/">
            トップに戻る
          </a>
          <button className="inputbutton" onClick={onClickTitle}>
            作成
          </button>
        </div>
      </div>
    </>
  );
};
