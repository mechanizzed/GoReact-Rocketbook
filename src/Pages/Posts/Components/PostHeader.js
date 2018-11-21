import React from 'react';

import './styles.css';

const PostHeader = props => (
  <div className="container-header">
    <div className="avatar">
      <img src={props.data.avatar} alt="avatar" width="60" />
    </div>
    <div className="info">
      <div className="title">{props.data.user}</div>
      <div className="date">{props.data.time}</div>
    </div>
  </div>
);

export default PostHeader;
