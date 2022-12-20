import { createContext, useContext, useEffect, useState, useRef } from "react";
import { getUserThreadsQuery, getUser } from "../../../../services/parse-functions";
import { useAuth } from "../../auth/core/Auth";

const ChatContext = createContext(undefined);

export const useChatContext = () => {
    return useContext(ChatContext);
}

export const MainChatPageProvider = ({ children }) => {

    const [currentReciever, setCurrentReciever] = useState({
        recieverId: null,
        recieverUsername: null
    });

    const [threadList, setThreadList] = useState([]);

    return (
        <ChatContext.Provider 
            value={{ 
                currentReciever, setCurrentReciever, 
                threadList, setThreadList }}
                >
                {children}
        </ChatContext.Provider>
    )

}

export const MainChatPageInit = ({ children }) => {

    const hasRequested = useRef(false);
    const { setThreadList, setCurrentReciever } = useChatContext();
    const { currentUser } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const getThreads = async () => {
            const threads = await getUserThreadsQuery();
            await handleThreadsOnInit(threads);

            setIsLoading(false);
            hasRequested.current = true;
        }
        if (!hasRequested.current) {
            try {
                getThreads();
            } catch (error) {
                console.error(error);
                setIsLoading(false);
                hasRequested.current = true;
            }
        }               
    }, []);

    const handleThreadsOnInit = async (threadArray) => {

        threadArray.forEach( (threadObj, index) => {

            // Check if reciever is the same as the current user
            if (threadObj.receiver.id === currentUser.id ) {
                // if true, let "sender" and "receiver" change place in the threadObj

                const renamedObj = {};

                renamedObj.thread = threadObj.thread;
                renamedObj.sender = threadObj.receiver;
                renamedObj.receiver = threadObj.sender;

                // Delete "old" object and insert renamed object into array on old objects index position
                threadArray.splice(index, 1, renamedObj);                

            }
        })

        // Set threads
        setThreadList(threadArray);

        try {
            // set current reciever to be the person at index 0
            // get username
            const receiverUsername = await getUser(threadArray[0].receiver.id);
            setCurrentReciever({
                recieverId: threadArray[0].receiver.id,
                recieverUsername: receiverUsername.get('username')
            })
        } catch (error) {
            setCurrentReciever({
                recieverId: null,
                recieverUsername: null
            })
        }

    }


    return (
        !isLoading && <>{children}</>
    )
}



