import TopBar from './TopBar'

import TopicList_Topic from './TopicList_Topic'

function TopicList(props) {
    return (
        <div className="col-4 min-vh-100">
            <TopBar category={props.category} />
            <div className="mt-5">
                <TopicList_Topic author="作者" posttime="10分鐘前" like="10" title="第1個post" />
                <TopicList_Topic author="Hi" posttime="19分鐘前" like="-2" title="第2個post" />
            </div>
        </div>
    );
}

export default TopicList