import React from "react";

const TranscriptButton = (props) => {
 return (
  <div>
   <button onClick={props.click}> Read Transcript </button>
  </div>
 )
}

export default TranscriptButton