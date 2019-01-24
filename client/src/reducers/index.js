const initState = {
    funds: {},
    splittedAmount: {}
}

export default function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'ALL_BALANCED_FUNDS': {
           const allBalancedFunds = action.data.data
            return {
                ...state,
                funds:{...state.funds, allBalancedFunds}
            }
        }
        case 'ALL_ELSS_FUNDS': {
            const allElssFunds = action.data.data
             return {
                 ...state,
                 funds:{...state.funds, allElssFunds}
             }
         }
         case 'ALL_EQUITY_FUNDS': {
            const allEquityFunds = action.data.data
             return {
                 ...state,
                 funds:{...state.funds, allEquityFunds}
             }
         }
         case 'ALL_DEBT_FUNDS': {
            const allDebtFunds = action.data.data
             return {
                 ...state,
                 funds:{...state.funds, allDebtFunds}
             }
         }
         case 'ALL_SMALLMIDCAP_FUNDS': {
            const allSmallMidcapFunds = action.data.data
             return {
                 ...state,
                 funds:{...state.funds, allSmallMidcapFunds}
             }
         }
         case 'SPLITTED_AMOUNT': {
            const obj = {
                balanced: action.data.balanced,
                elss: action.data.elss,
                enquity: action.data.enquity,
                debt: action.data.debt,
                smallMidcap: action.data.smallMidcap
            }
            return {
                ...state,
                splittedAmount: obj
            }
         }
        default: 
        return state;
    }
}