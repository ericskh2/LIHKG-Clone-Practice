import { useContext } from "react";

function FirstFloorTopBar(props) {
    const data = props.data;
    return (
        <div>
            <span className="text-secondary m-1">
                #1
            </span>
            <span className="text-primary m-1">
                {data.author} 
            </span>
            <span className="text-secondary m-1">
                {data.createTime}
            </span>
            <span>

            </span>
            <span>

            </span>
        </div>
    );
}

export default FirstFloorTopBar