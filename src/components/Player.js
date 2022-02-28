import ReactPlayer from "react-player/file";


const Player = ({ url }) => {
    return (
        <div className="App">
            <ReactPlayer url={url} playing={true} onPlay={console.log(url)} muted={false} controls={true} width="100%"  />
        </div>
    )
}

export default Player
