import TopBar from './TopBar'
import TopicList_Topic from './TopicList_Topic'

function TopicList(props) {
    const topics = [
        {
            "author": "作者",
            "posttime": "10分鐘前",
            "like": "10",
            "title": "第1個post"
        },
        {
            "author": "連泥住",
            "posttime": "5分鐘前",
            "like": "-10",
            "title": "第2個post"
        }
    ];
    function genTopics() {
        let generated = [];
        topics.forEach(topic => {
            generated.push(<TopicList_Topic topics={topic} />);
        });
        return generated;
    }
    return (
        <div className="col-4 min-vh-100">
            <TopBar category={props.category} />
            <div className="mt-5">
                {genTopics()}
            </div>
        </div>
    );
}

export default TopicList