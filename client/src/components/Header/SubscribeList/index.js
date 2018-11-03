import React from 'react';
import subscriptions from './subscriptions';

const SubscribeList = () => {
  const subscribeItems = subscriptions.map((item, i) => {
    return (
      <li key={i}>
        <a href={item.link} title={item.title} target="_blank">
          <img src={item.img} alt={item.alt} />
        </a>
      </li>
    );
  });

  return (
    <div className="subscribe-list icon-list-container">
      <ul>
        {subscribeItems}
      </ul>
    </div>
  );
}

export default SubscribeList;
