import React from 'react';

class SmileyCounter extends React.Component {
  render() {
    const { id, count, onClick } = this.props;
    return (
      <div>
        <div className="smiley" id={id} onClick={() => onClick(id)}>
          {String.fromCodePoint(parseInt(id))}
        </div>
        <div className="counter">{count}</div>
      </div>
    );
  }
}

export default SmileyCounter;