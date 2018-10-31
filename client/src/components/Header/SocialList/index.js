import React from 'react';
import socialLinks from './socialLinks';
import SocialListItem from '../SocialListItem';

const SocialList = () => {
  const socialItems = socialLinks.map((item, i) => {
    return (
      <SocialListItem
        key={i}
        socialLink={item} />
    );
  });

  return (
    <div className="social-list icon-list-container">
      <ul>
        {socialItems}
      </ul>
    </div>
  );
}

export default SocialList;
