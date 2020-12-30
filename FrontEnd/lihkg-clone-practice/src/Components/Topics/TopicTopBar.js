import Wall from './Wall'

function TopicTopBar(props){
    return (
        <div className="row">
            <span className="ml-5 pt-2">{props.topic.title}</span>
            <Wall />
        </div>
    );   
}

export default TopicTopBar