export const deleteTransaction = (id) => {
  return {
    type: "DELETE_TRANSACTION",
    payload: id,
  };
};

export const addTransaction = (transaction) => {
  return {
    type: "ADD_TRANSACTION",
    payload: transaction,
  };
};
