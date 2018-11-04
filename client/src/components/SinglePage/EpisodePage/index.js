import React, {Component} from 'react';
import episodeData from "../episodeData";
import Title from "../Title";
import ShowNotes from "../ShowNotes";
import RelevantLinks from '../RelevantLinks';
import Closer from "../Closer";


class EpisodePage extends Component {
 state = {
  episodes: [...episodeData]
 };

 render() {
  const  data = this.state;
   return (
    <div>
       <Title episode={data.episodes} />
       <ShowNotes episode={data.episodes} /> 
       <RelevantLinks episode={data.episodes}/>
       <Closer episode={data.episodes}/>
    </div>
   )
  }
}

export default EpisodePage