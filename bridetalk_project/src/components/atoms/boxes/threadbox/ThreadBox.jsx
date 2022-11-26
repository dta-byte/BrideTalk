import "./threadbox.css"

export const ThreadBox = (props) => {
    const { text, handleClick } = props

    return (
        <div 
            className="thread-container" 
            onClick={() => handleClick()}>
            <div className="thread-text">
                {text}
            </div>
        </div>
    )
}