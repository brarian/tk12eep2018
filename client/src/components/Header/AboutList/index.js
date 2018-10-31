import React from 'react';
import { aboutItems } from './aboutItems';
const AboutStyles = "fas fa-step-forward";

const AboutList = () => {

  const ListAboutItems = aboutItems.map((item, i) => {
    return (
      <li key={i}>
        <a href={item.link}><i className={AboutStyles}></i>{item.text}</a>
      </li>
    );
  });

  return (
    <div className="link-list-container">
      <ul>
        {ListAboutItems}
      </ul>
    </div>
  );
}

export default AboutList;
