import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home";
import { NewThread } from "./components/newthread";
import { Header } from "./components/Header";
import { NotFound } from "./components/notfournd";
import { ResList } from "./components/reslist";
import { GetAllThread } from "./components/getAllThread";

function App() {
  const [threadtitle, setThreadTitle] = useState([]);

  useEffect(() => {
    const fetchTreadData = async () => {
      //スレッドタイトル一覧を取得する
      let data = await GetAllThread(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
      );
      setThreadTitle(data);
    };
    fetchTreadData();
  }, []);

  console.log(threadtitle);

  return (
    <>
      <Header />

      <main>
        <ul>
          {threadtitle.map((post, index) => {
            return (
              <><Link to={`/thread/${threadtitle[index].id}`}>
                <li>{threadtitle[index].title}</li>
                </Link>
              </>
            );
          })}
        </ul>
      </main>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/thread/new"  element={<NewThread />} />
        <Route path="/thread/:Id"  element={<ResList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
