import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  state = { stories: [] };

  componentDidMount() {
    fetch('http://localhost:3000/topstories')
      .then(response => response.json())
      .then(json => this.setState({ stories: json }))
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <Header /><br/>
        <h3>The Latest Hacker News</h3>
        {
          this.state.stories.map(item => {
            const { id, by, score, title, url, time } = item;

            return (
              <div key={id}>
                <a href={url}><h3>{title}</h3></a>
                <p>Upvotes: {score}</p>
                <p>{by} - {new Date(time).toLocaleString()}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
};

export default App;