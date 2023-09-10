


export const NewThraed = (props) => {
    const { threadTitle, setThreadTitle, onClickTitle } = props;

    return (
        <>
            <div className="newthread">
                <h2>スレッド新規作成</h2>
                <input className="inputtitle"
                    placeholder="スレッドタイトル"
                    value={threadTitle}
                    onChange={(event) => {
                        setThreadTitle(event.target.value)
                    }}
                ></input>
                <div className='inputcontainer'>
                    <a className="inputlink" href="/">トップに戻る</a>
                    <button className="inputbutton" onClick={onClickTitle}>作成</button>
                </div>
            </div>
        </>
    );
};

export default NewThraed