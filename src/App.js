import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Route } from 'react-router-dom';
import { NewThraed } from './components/NewThraed'
import { TreadList } from './components/TreadList'


function App() {

  const [threadTitleGet, setThreadTitleGet] = useState([]); //スレッド一覧を取得するためのstate
  const [threadTitle, setThreadTitle] = useState(""); //スレッドを作成するためのstate
  const threadTitleSet = {
    "title": threadTitle
  };

  //スレッド一覧タイトルを取得する
  useEffect(() => {
    axios.get('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0')
      .then((response) => {
        setThreadTitleGet(response.data);
      });
  }, []);

  //スレッドタイトルをポストする
  const onClickTitle = () => {
    axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', threadTitleSet);
    setThreadTitle("");
  }

  return (

    <BrowserRouter>

      <header>
        <h1>時計掲示板</h1>
        <div> <a className="threadlink" href="/thread/new">スレッドを立てる</a></div>
      </header>

      <Route exact path="/">
        <TreadList threadGet={threadTitleGet} />
      </Route>

      <Route path="/thread/new">
        <NewThraed
          threadTitle={threadTitle}
          setThreadTitle={setThreadTitle}
          onClickTitle={onClickTitle}
        />
      </Route>

      <footer></footer>

    </BrowserRouter>

  );
}

export default App;

