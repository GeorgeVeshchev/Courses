import React, { Component } from 'react';
import SmileyCounter from './components/SmileyCounter'; 

class SmileyVotingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: {
        128578: 0, // код для смайла 😊
        128516: 0, // код для смайла 😄
        128525: 0  // код для смайла 😍
      }
    };
  }

  handleClick = (id) => {
    const { counts } = this.state;
    const newCounts = { ...counts };
    newCounts[id] += 1;
    this.setState({ counts: newCounts });
    localStorage.setItem('smileyCounts', JSON.stringify(newCounts));
  }

  showResults = () => {
    const { counts } = this.state;
    let maxCount = -Infinity;
    let winningSmiley = '';

    for (const key in counts) {
      if (counts.hasOwnProperty(key)) {
        const count = counts[key];
        if (count > maxCount) {
          maxCount = count;
          winningSmiley = key;
        }
      }
    }

    if (winningSmiley) {
      alert(`The winning smiley is ${String.fromCodePoint(parseInt(winningSmiley))} with ${maxCount} votes!`);
    } else {
      alert('No votes recorded yet.');
    }
  }

  clearResults = () => {
    localStorage.removeItem('smileyCounts');
    this.setState({
      counts: {
        128578: 0,
        128516: 0,
        128525: 0
      }
    });
  }

  componentDidMount() {
    const storedCounts = JSON.parse(localStorage.getItem('smileyCounts'));
    if (storedCounts) {
      this.setState({ counts: storedCounts });
    }
  }

  render() {
    const { counts } = this.state;

    return (
      <div>
        <div id="smiley-list">
          {Object.keys(counts).map((key) => (
            <SmileyCounter
              key={key}
              id={key}
              count={counts[key]}
              onClick={this.handleClick}
            />
          ))}
        </div>
        <button onClick={this.showResults}>Show Results</button>
        <button onClick={this.clearResults}>Clear Results</button>
      </div>
    );
  }
}

export default SmileyVotingApp;
