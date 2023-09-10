import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NewThraed } from "./components/NewThraed";
import { TreadList } from "./components/TreadList";
import { NotFound } from "./components/NotFound";

function App() {
  const params = useParams();
  const [resList, setResList] = useState([]);
  const [threadtitle,setThreadTitle] = useState([]);
  const initialURL =
    "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/bd0d242c-15b2-422b-82d3-6704e36e9422/posts";

  const getAllThread = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
  };

  useEffect(() => {
    const fetchTreadData = async () => {
      //スレッドタイトル一覧を取得する
      let data = await getAllThread("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0");
      setThreadTitle(data);
    };
    fetchTreadData();
  }, []);

  console.log(threadtitle);
  console.log(params);
  // console.log(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadtitle[0]}/posts`)

  // console.log(resList);


  // const loadPokemon = (data) => {
  //   let _pokemonData = Promise.all(
  //     data.map((pokemon) =>{
  //       console.log(pokemon)
  //     })
  //   )
  // }

  // useEffect(() => {
  //   const fetchPokemonData = async () => {
  //     //全てのポケモンデータを取得
  //     let res = await getAllPokemon(initialURL);
  //     //各ポケモンの詳細なデータを取得
  //     loadPokemon(res.results);
  //     // console.log(res.results);
  //     setLoading(false);
  //   };
  //   fetchPokemonData();
  // }, []);

  // const loadPokemon = (data) => {
  //   let _pokemonData = Promise.all(
  //     data.map((pokemon) =>{
  //       console.log(pokemon)
  //     })
  //   )
  // }

  return (
    <BrowserRouter>
      <Header />

      <Switch>
      <ul>
      {threadtitle.map((post,index) => {
        return <>
        <Route exact path="/thread/:id"></Route>
        <li>{`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadtitle[index].id}/posts`}</li>
        <li>{threadtitle[index].title}</li>
        </>

      })}
      </ul>

        <Route exact path="/"></Route>
        
        <Route path=""></Route>

        <Route path="/thread/new"></Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
