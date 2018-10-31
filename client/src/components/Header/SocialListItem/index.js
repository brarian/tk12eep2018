import React from 'react';

const SocialListItem = ({ socialLink }) => {
  if (socialLink.icon) {
    return (
      <li className={socialLink.class ? socialLink.class : ""}>
        <a href={socialLink.link} title={socialLink.title} target="_blank">
          <i className={socialLink.icon}></i>
        </a>
      </li>
    )
  }

  return (
    <li className={socialLink.class ? socialLink.class : ""}>
      <a href={socialLink.link} title={socialLink.title} target="_blank">
        <img src={socialLink.img} alt={socialLink.alt} />
      </a>
    </li>
  );
}

export default SocialListItem;
