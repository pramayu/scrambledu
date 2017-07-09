import React, { Component } from 'react';
import classnames from 'classnames';
import jwt from 'jsonwebtoken';

class BankAccountList extends Component {

  removeBankAccount() {
    this.props.deleteBankData(this.props.bank._id)
  }

  render() {
    var nomorRekening = jwt.decode(this.props.bank.rekening)
    return (
      <ul className={classnames('list-unstyled chft cgyuo', {'cgyuo_': (this.props.id + 1)%2 === 0})}>
        <li className="name">{ this.props.bank.identifier }</li>
        <li className="receiver">{ nomorRekening.rekening }</li>
        <li className="phone">{ this.props.bank.branch }</li>
        <li className="adres">{ this.props.bank.bankname.name }</li>
        <li className="action">
          <span className="fa fa-trash-o" onClick={ this.removeBankAccount.bind(this) }></span>
        </li>
      </ul>
    )
  }
}

export default BankAccountList;
