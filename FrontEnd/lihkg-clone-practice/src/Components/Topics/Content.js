import FirstFloorTopBar from './Reply/FirstFloorTopBar'
import Wall from './Wall'
import Like from './Like'

function Content(props){
    const data = props.content; 
    return (
            <div className="m-5">
                    <div className="row">
                        <FirstFloorTopBar data={data} />
                    </div>
                    <div className="row">
                        <h1>{data.content}</h1>
                    </div>
                    <div className="row">
                        <Like data={data} likedata={{'like':0,'dislike':0}}/>
                    </div>
                    <Wall />
            </div>
    );
}

export default Content