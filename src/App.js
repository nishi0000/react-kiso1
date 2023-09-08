import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Route, Switch, Link,useHistory } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NewThraed } from './components/NewThraed'
import { TreadList } from './components/TreadList'
import { NotFound } from './components/NotFound';



function App() {

  const [threadTitleGet, setThreadTitleGet] = useState([]); //スレッド一覧を取得するためのstate
  const [threadTitle, setThreadTitle] = useState(""); //スレッドを作成するためのstate
  const threadTitleSet = {
    "title": threadTitle
  };
  // const history = useHistory();

  //スレッド一覧タイトルを取得する
  useEffect(() => {
    axios.get('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0')
      .then((response) => {
        setThreadTitleGet(response.data);
      });
  }, []);

  //スレッドタイトルをポストする
  const onClickTitle = () => {
    if (threadTitleSet.title === ""){
      alert("タイトルを入力してください。")
    }else{
      axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', threadTitleSet);
      setThreadTitle("");
    }

  }

  // const onClickLink = () =>{
  //   history.push("/thread/new");
  // }

  return (

    <BrowserRouter>

      <Header />
      {/* <button onClick={onClickLink}>リンク</button> */}
      <Switch>

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

        <Route>
          <NotFound />
        </Route>

      </Switch>

      <Footer />

    </BrowserRouter>

  );
}

export default App;
