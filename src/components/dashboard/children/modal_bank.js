import React, { Component } from 'react';

class ModalBank extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      identifier: '',
      rekening: '',
      bankname: 'choose_default',
      branch: '',
      otp: '',
      pass: '',
      isLoading: false,
      errors: {},
      bankAcId: '',
      newAc: false,
      isSendMessage: false
    }
    this.delBankNewAccount = this.delBankNewAccount.bind(this)
    this.sendOtpCode = this.sendOtpCode.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      bankAcId: nextProps.bankAc._id ? nextProps.bankAc._id : '',
      newAc: nextProps.bankAc.newAc ? nextProps.bankAc.newAc : false
    })
  }

  delBankNewAccount() {
    this.props.delBankNewAccount(this.props.current_user._id, this.state.bankAcId).then((res) => {
      this.setState({
        bankAcId: '',
        newAc: false
      })
    })
  }

  sendOtpCode(e) {
    e.preventDefault()
    this.setState({
      isSendMessage: true
    })
    this.props.sendOtpCode(this.props.current_user._id, this.state.bankAcId).then((res) => {
      this.setState({
        isSendMessage: false
      })
    })
  }

  render() {
    let bankChoose = (
      this.props.bank.bank.map((bank, id) => {
        return (
          <option key={id} value={bank._id}>{bank.name}</option>
        )
      })
    )
    return (
      <div className="modal fade kor" id="myModalBank" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.delBankNewAccount}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Add New Bank Account</h4>
              </div>
              <div className="modal-body">
                <div className="body-content">
                  <div className="form-add">
                    <div className='form-group'>
                      <span className="identifier">identifier</span>
                      <div className='rvi'>
                        <input type="text" name="identifier" className="form-control"
                          spellCheck="false" autoComplete="off"/>
                      </div>
                    </div>
                    <div className='form-group'>
                      <span className="rekening">number</span>
                      <div className='rvi'>
                        <input type="text" name="rekening" className="form-control"
                          spellCheck="false" autoComplete="off"/>
                      </div>
                    </div>
                    <div className="col-md-6" style={{paddingLeft: '0px', paddingRight: '7.5px'}}>
                      <div className='form-group'>
                        <span className="bank-name">bank name</span>
                        <div className="rvi">
                          <select name="bankname" className="form-control">
                            <option value="choose_default">Choose Bank</option>
                            { bankChoose }
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" style={{paddingRight: '0px', paddingLeft: '7.5px'}}>
                      <div className='form-group'>
                        <span className="branch">branch</span>
                        <div className='rvi'>
                          <input type="text" name="branch" className="form-control"
                            spellCheck="false" autoComplete="off"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8" style={{paddingLeft: '0px', paddingRight: '7.5px'}}>
                      <div className='form-group'>
                        <span className="otp">otp code</span>
                        <div className='rvi'>
                          <input type="text" name="otp" className="form-control"
                            spellCheck="false" autoComplete="off"/>
                        </div>
                      </div>
                    </div>
                    <div className="clear"></div>
                    <div className='form-group'>
                      <div className='rvi'>
                        <a onClick={ this.sendOtpCode } className="btn btn-for" disabled = {this.state.isSendMessage}>
                          {this.state.isSendMessage === true ? 'PLEASE WAIT...' : 'REQUEST OTP CODE'}
                        </a>
                      </div>
                    </div>
                    <div className='form-group'>
                      <span className="pass">current password</span>
                      <div className='rvi'>
                        <input type="text" name="pass" className="form-control"
                          spellCheck="false" autoComplete="off"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary bry">SAVE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalBank;
