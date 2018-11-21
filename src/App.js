import React, { Component, Fragment } from 'react';

// styles global
import './global.css';

// components
import Header from './Components/Header';
import Posts from './Pages/Posts/Posts';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post1: {
        avatar: 'https://i.imgur.com/PMaMsfI.png',
        user: 'Diego Schell Fernandes',
        time: 'há 3 horas',
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      post2: {
        avatar: 'https://i.imgur.com/PMaMsfI.png',
        user: 'Diego Schell Fernandes',
        time: 'há 3 horas',
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      post3: {
        avatar: 'https://i.imgur.com/PMaMsfI.png',
        user: 'Diego Schell Fernandes',
        time: 'há 3 horas',
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Posts data={this.state.post1} />
        <Posts data={this.state.post2} />
        <Posts data={this.state.post3} />
      </Fragment>
    );
  }
}
