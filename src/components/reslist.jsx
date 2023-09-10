import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetAllThread } from './getAllThread';


export const ResList = () => {
    const params = useParams();
    const [resList, setResList] = useState("");


    useEffect(() => {
        const fetchTreadData = async () => {
          let res = await GetAllThread(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${params.Id}/posts`);
          // console.log(res);
          setResList(res.posts);
        };
        fetchTreadData();
      }, [params]);

      console.log(resList);


    return (
        <>
        <p>投稿一覧画面だよ！{params.Id}</p>
        {resList.length === 0 ? <p>何も投稿されていません。<br />何か投稿してみましょう！</p>:<p>レスあるよ</p>}


        </>
    )
}