import React, {Component} from 'react';
import episodeData from "../episodeData";
import Title from "../Title";
import ShowNotes from "../ShowNotes";
import RelevantLinks from '../RelevantLinks';
import Closer from "../Closer";
import Transcript from "../Transcript";
import TranscriptButton from "../TranscriptButton"
class EpisodePage extends Component {
 constructor(props){
  super(props)
  this.state = {
   episodes: [...episodeData], 
   showTranscript: false
  };
 }
 
 toggleShow = e => {
  const doesShow = this.state.showTranscript;
  this.setState({ showTranscript: !doesShow })
 }

 render() {
  const data = this.state;
   return (
    <div style={{
     border: '2px solid black',
     margin: '1px'   }}>
       <Title episode={data.episodes} />
       <ShowNotes episode={data.episodes} /> 
       <RelevantLinks episode={data.episodes}/>
       <Closer episode={data.episodes}/>
       <TranscriptButton click={this.toggleShow}> 
        { this.state.showTranscript === true ?
           <div> <Transcript /> </div> : null
        }
       </TranscriptButton>
    </div>
   )
  }
}

export default EpisodePage