import video from "../data/video.js";
import Comments from "./Comments";
import {useState} from "react";

function App() {
  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);
  const [hideComments, setHideComments] = useState(false);

  const handleLike = () => {
    setLikes((likes) => (likes + 1))
  }

  const handleDislike = () => {
    setDislikes((dislikes) => (dislikes + 1))
  }

  const handleComments = () => {
    setHideComments(!hideComments);
  }
 
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <h4>{video.views} views | Uploaded at {video.createdAt}</h4>
      <button onClick={() => handleLike()}>{likes}👍</button> <button onClick={() => handleDislike()}>{dislikes}👎</button>
      <button style={{display: "block", margin: "auto"}} onClick={handleComments}>{hideComments ? "Show Comments" : "Hide Comments"}</button>
      <hr></hr>
        {hideComments ? <> </>: <Comments comments={video.comments}/>}
    </div>
  );
}

export default App;
