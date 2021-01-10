import { useContext } from "react";

function ReplyTopBar(props) {
    const data = props.data;
    if(data.floor == undefined)data.floor = 0;
    return (
        <div>
            <span className="text-secondary m-1">
                #{data.floor+2}
            </span>
            <span className="text-primary m-1">
                {data.author} 
            </span>
            <span className="text-secondary m-1">
                {data.replyTime.substring(0,10)+' '+data.replyTime.substring(11,19)}
            </span>
            <span>

            </span>
            <span>

            </span>
        </div>
    );
}

export default ReplyTopBar