
export const TreadList = (props) => {
    const { threadGet } = props;

    return (
        <main>
            <h2>新着スレッド</h2>
            <ul>
                {threadGet.map((data, index) => {
                    return <li key={index.toString()}>{data.title}</li>
                })}
            </ul>
        </main>
    );
};

export default TreadList;