import React, {Component} from 'react';
import episodeData from "../episodeData";
import Title from "../Title";
import ShowNotes from "../ShowNotes";
import RelevantLinks from '../RelevantLinks';
import Closer from "../Closer";
import TranscriptButton from "../Transcript";

class EpisodePage extends Component {
 constructor(props){
  super(props)
  this.state = {
   episodes: [...episodeData], 
   scriptHidden: true
  };
 }
 
 toggle(){
  console.log("clicked");
 }

 render() {
  const data = this.state;
   return (
    <div>
       <Title episode={data.episodes} />
       <ShowNotes episode={data.episodes} /> 
       <RelevantLinks episode={data.episodes}/>
       <Closer episode={data.episodes}/>
       <TranscriptButton click={this.toggle}/>
    </div>
   )
  }
}

export default EpisodePage