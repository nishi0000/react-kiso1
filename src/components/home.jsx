import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GetAllThread } from "./getAllThread";
import "../css/home.css";


export const Home = () => {
  const [threadtitle, setThreadTitle] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTreadData = async () => {
      //スレッドタイトル一覧を取得する
      let data = await GetAllThread(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
      );
      setThreadTitle(data);
      setLoading(true);
    };
    fetchTreadData();
  }, []);

  return (
    <>
      {!loading ? (
        <p>ロード中</p>
      ) : (
        <main>
          <h1>新着スレッド</h1>
          <ul>
            {threadtitle.map((post, index) => {
              return (
                  <Link key={index}
                    className="threadLink"
                    to={{
                      pathname: `/thread/${threadtitle[index].id}`,
                    }}
                  >
                    <li>{threadtitle[index].title}</li>
                  </Link>
              );
            })}
          </ul>
        </main>
      )}

      <Outlet />
    </>
  );
};
