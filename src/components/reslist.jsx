import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetAllThread } from "./getAllThread";
import "../css/reslist.css";
import axios from "axios";

export const ResList = () => {
  const params = useParams();
  const [resList, setResList] = useState("");
  const [threadTitleGet, setThreadTitleGet] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState([]);
  const resInput = {
    post: res,
  };

  let threadTitleHere = "";

  useEffect(() => {
    const fetchTreadData = async () => {
      //スレッドタイトル一覧取得
      let data = await GetAllThread(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
      );
      setThreadTitleGet(data);
      //該当スレッドのレスを取得
      let res = await GetAllThread(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${params.Id}/posts`
      );
      setResList(res);
      setLoading(true);
    };
    fetchTreadData();
  }, [params]);

  if (threadTitleGet === "" || resList === "") {
  } else {
    threadTitleGet.map((data) => {
      if (resList.threadId == data.id) {
        threadTitleHere = data.title;
      } else {
      }
    });
  }

  console.log(resList);

  // if(resList.posts.length === 0){
  //   axios.post(
  //     `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${resList.threadId}/posts`,
  //     resInput
  //   );

  // }

  //レスをポストする
  const onClickResSet = () => {
    if (resInput.post === "") {
      alert("投稿内容を入力してください。");
    } else{
      axios.post(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${resList.threadId}/posts`,
        resInput
      );
      setRes("");
      window.location.reload();
    }
  };


  return (
    <>
      <div className="maincontainer">
        {!loading ? (
          <p>ロード中だよ</p>
        ) : (
          <main>
            <div className="test">
            <h2>{threadTitleHere}</h2>

            {resList.posts.length === 0 ? (
              <p>
                何も投稿されていません。
                <br />
                何か投稿してみましょう！
              </p>
            ) : (
              resList.posts.map((data, index) => {
                return <p key={index} className="reslist">{resList.posts[index].post}</p>;
              })
            )}
            </div>
          </main>
        )}

        <div className="inputarea">
          <textarea
            placeholder="投稿する内容を入力してね！"
            value={resInput.post}
            onChange={(event) => {
              setRes(event.target.value);
            }}
          ></textarea>
          <button onClick={onClickResSet}>投稿</button>
        </div>
      </div>
    </>
  );
};
