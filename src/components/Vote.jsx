import React from 'react';

class Vote extends React.Component {
  constructor(props) {
   super(props);
  }


  getPair() {
    return this.props.pair || [];
  }

  hasVotedFor() {
    return this.props.hasVoted === entry;
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry }
                  disabled={this.isDisabled()}
                  onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
                <div className="label">Voted</div> :
                null}
          </button>
        )}  
        </div>
    );
  }
}

export default Vote;
