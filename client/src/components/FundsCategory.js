import React, { Component } from 'react';
import { connect } from 'react-redux';
import Invest from './Invest';
import Suggestion from './Suggestion';

class FundsCategory extends Component {
    state = {
        wantToInvest: false
    }
    handleInvestment = () => {
        this.setState({
            wantToInvest: !this.state.wantToInvest
        })
    }
  render() {
      const { funds, splittedAmount }= this.props;
      if(this.state.wantToInvest) return <Invest handleRemove={this.handleInvestment} />
     else return (
            <div className="funds-category">
              <header className="header">
                <img src={require('./../images/../images/cleartax.png')} className="logo-img" alt="logo" />
                <button className="invest-btn" onClick={this.handleInvestment}>Want To Invest?</button>
              </header>
              {
                 funds.length ? 
                 <div className="funds-history">
                     <h2>Top Performing {funds[0].type}</h2>
                    <ol>
                        <div className="fund-heading">
                        <span>Funds</span>
                        <span>5yr returns</span>
                        </div>
                    {
                    funds && funds.map(fund => 
                        <li className="fund-item">
                            <span>{fund.name}</span>
                            <span>{fund.fiveYrReturns}%</span>
                        </li>
                        )
                    }
                     </ol> 

                 </div> : 
                 <div className="hero">
                    <h1>Mutual Fund Recommendation.</h1>
                    <p>Find where and how much should you invest.</p>
                    <button className="invest-btn btn-center" onClick={this.handleInvestment}>Get Started</button>
                 </div>
              }
             
            </div>
          )

       }
}

const mapStateToProps = (state) => {
    return {
        splittedAmount: state.splittedAmount
    }
}

export default connect(mapStateToProps)(FundsCategory);