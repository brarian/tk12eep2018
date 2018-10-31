import React from 'react';
import { footerItems } from "./footerItems.js";

const Footer = () => {
 const FooterListItems = footerItems.map((item, i) => {
  return (
   <li key={i}>
    <a href={item.link}>{item.text} <img alt="album art" src={item.src} /></a>
   </li>
  );
 });

  return (
   <div>
    <ul>
     {FooterListItems}
    </ul>
   </div>
  );
}

export default Footer;