import React from 'react';
import moment from "moment";

const ShowNotes = (props) => {
 console.log("show notes", props.episode);
 let date = moment(props.episode[0].date.released).format('LL')
 return (
  <div>
   <h3>Show Notes</h3>
   <p>Released {date}</p>
   <p>Guest: {props.episode[0].guests.map((guest, i)=> <span key={i}>{guest}<span>&nbsp;</span></span>)} </p>
   <p>Host: {props.episode[0].hosts}</p>
   <p>  Tags: {props.episode[0].tags.map((tag, i)=> <span key={i}>{tag}<span>&nbsp;</span></span>)} </p>
   <p>{props.episode[0].description.long.paragraphs[0]} </p>
  </div>
 )
}

export default ShowNotes