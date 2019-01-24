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
      </div>
    )
  }
}
