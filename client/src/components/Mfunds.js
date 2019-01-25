import React, { Component } from 'react'

export default class Mfunds extends Component {
  render() {
    const { handleTarget } = this.props;
    return (
      <div className="m-funds">
        <div className="m-funds_list">
            <span className="subheading">Top Performing Funds</span>
            <ul className="funds-categories">
                <li className="funds-categories_item" onClick={() => handleTarget("balanced-funds")}>Balanced Funds</li>
                <li className="funds-categories_item" onClick={() => handleTarget("elss-funds")}>ELSS Funds</li>
                <li className="funds-categories_item" onClick={() => handleTarget("equity-funds")}>Equity Funds</li>
                <li className="funds-categories_item" onClick={() => handleTarget("debt-funds")}>Debt Funds</li>
                <li className="funds-categories_item" onClick={() => handleTarget("small-midcap-funds")}>Small & Midcap Funds</li>
            </ul>
        </div>
        <div className="hero-note">
          <p>NOTE: <a href="https://github.com/ashwanig3" target="_blank">github.com/ashwanig3</a> built with the help of Cleartax official website for an interview with them. It's not built by folks at Cleartax. So if there are any glitches, responsibility is entirely mine and not theirs.</p>
        </div>
      </div>
    )
  }
}
