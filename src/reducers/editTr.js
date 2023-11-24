const initialState = {
  // transactions: getLocalItems(),
  transactions: [],
};

const editTrans = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        // transactions: localStorage.setItem(
        //   "trans",
        //   JSON.stringify([action.payload, ...state.transactions])
        // ),
      };

    default:
      return state;
  }
};

export default editTrans;
