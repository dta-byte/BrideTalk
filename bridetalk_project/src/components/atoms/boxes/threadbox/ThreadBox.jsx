import { useEffect, useState } from "react";
import { getUser } from "../../../../services/parse-functions";

import "./threadbox.css"

export const ThreadBox = (props) => {

    const { handleClick, recieverId } = props;
    const [recivername, setRecievername] = useState(null);

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        const reciver = await getUser(recieverId);
        setRecievername(reciver.get('username'))
    };

    return (
        <div 
            className="thread-container"
            onClick={() => handleClick()}>

            <div className="thread-text">
                {recivername}
            </div>

        </div>
    )
}