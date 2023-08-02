export function ProgressBar({completed}) {

    const fillerStyles = {
        width: `${completed}%`,
    }

    return (
        <div className="progress-bar-container" >
            <div className="progress-bar-filler" style={fillerStyles}>        
            </div>
        </div>
    )
}