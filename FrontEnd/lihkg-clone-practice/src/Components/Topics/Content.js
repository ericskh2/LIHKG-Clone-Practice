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
                        <p><h1>{data.content}</h1></p>
                    </div>
                    <div className="row">
                        <Like data={data} />
                    </div>
                    <Wall />
            </div>
    );
}

export default Content