import React from 'react';

import PostHeader from './Components/PostHeader';

import './styles.css';

const Posts = props => (
  <section className="container">
    <div className="box-posts">
      <PostHeader data={props.data} />
      <div className="description-posts">{props.data.desc}</div>
    </div>
  </section>
);

export default Posts;
