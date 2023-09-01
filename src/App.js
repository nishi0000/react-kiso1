import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Route } from 'react-router-dom';
import { NewThraed } from './components/NewThraed'
import { TreadList } from './components/TreadList'
import { ResList } from './components/ResList'



function App() {

  const [threadTitleGet, setThreadTitleGet] = useState([]); //スレッド一覧を取得するためのstate
  const [threadTitle, setThreadTitle] = useState(""); //スレッドを作成するためのstate
  const [resList, setResList] = useState([]);//スレッド投稿一覧を取得するためのstate
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

  //スレッド投稿一覧を取得する

  const test = {
    "post": "1111"
  }

  useEffect(() => {
    axios.post('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/bd0d242c-15b2-422b-82d3-6704e36e9422/posts', test);
    setThreadTitle("");
  }, []);


  // https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/bd0d242c-15b2-422b-82d3-6704e36e9422/posts

  useEffect(() => {
    axios.get('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/bd0d242c-15b2-422b-82d3-6704e36e9422/posts')
      .then((response) => {
        setResList(response.data);
      });
  }, []);



  console.log(resList.posts);


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

      <Route path="">
        <ResList />
      </Route>

      <footer></footer>

    </BrowserRouter>

  );
}


export default App;

// { "threadId": "bd0d242c-15b2-422b-82d3-6704e36e9422", 
// "posts": [{ "id": "71bcc866-3cd6-4e6d-a07f-097e69bae5fb", "post": "1111" }, 
// { "id": "98f007ba-4cee-45ad-a87d-080746c59576", "post": "1111" }, 
// { "id": "0152d722-fe17-44ce-ae55-68c4a22aa3d8", "post": "1111" }, 
// { "id": "02145d96-6876-4f6b-9223-7aac07017f25", "post": "ああああ" }, 
// { "id": "189f210a-3dbb-4145-9e8d-af755bf4e726", "post": "ああああ" }, 
// { "id": "44ec6f6b-7b66-4c51-83c2-f24147d9c605", "post": "ああああ" }, 
// { "id": "0ac963cc-db85-495f-88c7-ab5e6d9ed43e", "post": "string" }, 
// { "id": "bb0afe71-2bd0-46c9-9f16-41b928d63745", "post": "string" }, 
// { "id": "079fa4ec-ccbb-45cb-b885-15768de74358", "post": "string" }, 
// { "id": "1a8a5147-8229-4068-8c05-898e9f230d46", "post": "" }] }
