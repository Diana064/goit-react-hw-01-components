import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { App } from 'components/App';
import Profile from 'components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from 'components/statistics/Statistics';
import data from './components/statistics/data.json';

import friends from './components/friendList/friends.json';
import FriendList from 'components/statistics/Statistics';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />;
  </React.StrictMode>
);
