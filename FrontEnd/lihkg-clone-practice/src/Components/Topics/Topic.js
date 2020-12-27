import TopicTopBar from './TopicTopBar'
import Reply from './Reply/Reply'

function Topic() {
    return (
        <div className="col-8">
            <div>
                <TopicTopBar />
            </div>
            <div>
                <Reply />
                <Reply />
            </div>
        </div>
    );
}

export default Topic