import { useContext } from "react";

function ReplyTopBar(props) {
    return (
        <div>
            <span className="text-secondary m-1">
                #{props.data.floor}
            </span>
            <span className="text-primary m-1">
                {props.data.author} 
            </span>
            <span className="text-secondary m-1">
                {props.data.replytime}
            </span>
            <span>

            </span>
            <span>

            </span>
        </div>
    );
}

export default ReplyTopBar