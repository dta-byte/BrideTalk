import { useEffect, useState } from "react";
import { getUser } from "../../../../services/parse-functions";

import "./threadbox.css"

export const ThreadBox = (props) => {

    const { handleClick, recieverId } = props;
    const [receivername, setReceiverName] = useState(null);

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        const receiver = await getUser(recieverId);
        setReceiverName(receiver.get('username'))
    };

    return (
        <div
            onClick={() => 
            handleClick(recieverId, receivername)}>
            <div className="thread-box" >
                {receivername}
            </div>
        </div>
    )
}