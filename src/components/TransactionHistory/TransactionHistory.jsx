import React from "react";
import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (<table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody className={css.transaction_history_body}>
            {items.map(({ id, type, amount, currency }) => {
       return(<tr key={id}>
           <td>{type}</td>
           <td>{amount}</td>
           <td>{currency}</td>
    </tr>)
   })}
  </tbody>
</table>)
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

