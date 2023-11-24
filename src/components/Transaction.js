import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../actions";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => dispatch(deleteTransaction(transaction.id))}
        className={"delete-btn"}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
