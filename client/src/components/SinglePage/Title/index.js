import React, {Component} from 'react';
import episodeData from "../episodeData";
import ShowNotes from "../ShowNotes";
import RelevantLinks from '../RelevantLinks';

class Title extends Component {
 state = {
  episodes: [...episodeData]
 };

 render() {
 const  data = this.state;
 console.log(data);
  return (
   <div>
      <h1> {data.episodes[0].title} </h1>
      <ShowNotes episode={data.episodes} /> 
      <RelevantLinks episode={data.episodes}/>
   </div>
  )
 }
}

export default Title