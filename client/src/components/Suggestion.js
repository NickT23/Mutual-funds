import React, { Component } from 'react'
import { connect } from 'react-redux';

class Suggestion extends Component {
  render() {
      const { splittedAmount } = this.props;
    return (
      <div className="suggesstion-wrapper">
          <header className="modale-header">
            <div className="remove-btn" onClick={() => this.props.handleRemove()}>x</div>
          </header>
          <div className="suggestion">
          <h1>Recommendation</h1>
          <ol>
            {
              splittedAmount.balanced ?
              <li>You should put {Math.round(splittedAmount.balanced)}Rs of Balanced Fund in <span>HDFC Hybrid Equity Fund</span> because it has highest five year returns with 17.02%.</li> :
              <div></div>
            }
            {
              splittedAmount.elss ? 
              <li>You should put {Math.round(splittedAmount.elss)}Rs of ELSS Fund in <span>Axis Long Term Equity Fund</span> because it has highest five year returns with 20.54%.</li> :
              <div></div>
            }
            {
              splittedAmount.enquity ? 
              <li>You should put {Math.round(splittedAmount.enquity)}Rs of Enquity Fund in <span>Mirae Asset Emerging Bluechip</span> because it has highest five year returns with 28.09%.</li> :
              <div></div>
            }
            {
              splittedAmount.debt ? 
              <li>You should put {Math.round(splittedAmount.debt)}Rs of Debt Fund in <span>Aditya BSL Medium Term</span> because it has highest five year returns with 8.93%.</li>:
              <div></div>
            }
            {
              splittedAmount.smallMidcap ? 
              <li>You should put {Math.round(splittedAmount.smallMidcap)}Rs of Small & Midcap Fund in <span>SBI Small Cap Fund</span> because it has highest five year returns with 30.78%.</li> :
              <div></div>
            }
         </ol>
        <p>Thank you</p>

          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        splittedAmount: state.splittedAmount
    }
}

export default connect(mapStateToProps)(Suggestion)