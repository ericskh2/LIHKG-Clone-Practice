import TopicTopBar from './TopicTopBar'
import Reply from './Reply'

function Topic() {
    return (
        <div className="col-8">
            <div>
                <TopicTopBar />
            </div>
            <div>
                <Reply floor="1" author="毒步天下" replytime="9分鐘前" like="100" dislike="6" content="都大>Shitty#laugh"/>
                <Reply floor="2" author="城大科工狗" replytime="5分鐘前" like="3" dislike="57" content="吾城第一#angry"/>
            </div>
        </div>
    );
}

export default Topic