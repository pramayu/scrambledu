import React, { Component } from 'react';
import classnames from 'classnames';

import { addressReceiver } from '../../../../validate/address';

class ModalAddress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      receiver: '',
      phone: '',
      province: 0,
      regency: 0,
      district: 0,
      address: '',
      zipcode: '',
      errors: {},
      isLoading: false
    }
    this.getRegencyChange = this.getRegencyChange.bind(this)
    this.getDistrictChange = this.getDistrictChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getRegencyChange(e) {
    this.props.getRegency(e.target.value)
  }

  getDistrictChange(e) {
    this.props.getDistrict(e.target.value)
  }

  isValid() {
    let { errors, isValid } = addressReceiver(this.state)
    if(!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  handleChange(e) {
    if(!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name]
      this.setState({
        [e.target.name]: e.target.value,
        errors
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.addAddressReceiver(this.state, this.props.current_user._id).then(() => {
        this.setState({
          identifier: '',
          receiver: '',
          phone: '',
          province: 'choose_default',
          regency: 'choose_default',
          district: 'choose_default',
          address: '',
          zipcode: '',
        })
        let that = this;
        setTimeout(function () {
          that.setState({
            isLoading: false
          })
        }, 2000);
      })
    }
  }

  render() {

    let thisProvs = (
      this.props.provinces.provinces.map((prop, id) => {
        return (
          <option key={id} value={prop._id}>{ prop.name.slice(0).toLowerCase() }</option>
        )
      })
    )

    let thisRegency = (
      this.props.regencies.regencies.map((reg, id) => {
        return (
          <option key={id} value={reg._id}>{ reg.name.slice(0).toLowerCase() }</option>
        )
      })
    )

    let thisDistrict = (
      this.props.districts.districts.map((dist, id) => {
        return (
          <option key={id} value={dist._id}>{ dist.name.slice(0).toLowerCase() }</option>
        )
      })
    )

    return (
      <div className="modal fade kor" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">New Address</h4>
              </div>
              <div className="modal-body">
                <div className="body-content">
                  <div className="form-add">
                    <div className="form-group">
                      <span className="identifier">identifier</span>
                      <div className="rvi">
                        <input type="text" value={this.state.identifier} name="identifier" className="form-control"
                          spellCheck="false" onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="receiver">receiver</span>
                      <div className="rvi">
                        <input type="text" name="receiver" value={this.state.receiver} className="form-control"
                          spellCheck="false" onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="col-md-6" style={{paddingLeft: '0px', paddingRight: '7.5px'}}>
                      <div className="form-group">
                        <span className="phone">phone</span>
                        <div className="rvi">
                          <input type="text" name="phone" value={this.state.phone} className="form-control"
                            spellCheck="false" onChange={this.handleChange}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" style={{paddingRight: '0px', paddingLeft: '7.5px'}}>
                      <div className="form-group">
                        <span className="phone">zipcode</span>
                        <div className="rvi">
                          <input type="text" name="zipcode" value={this.state.zipcode} className="form-control"
                            spellCheck="false" onChange={this.handleChange}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 prov">
                      <div className="form-group">
                        <span className="province">province</span>
                        <div className="rvi">
                          <select name="province" className="form-control" value={this.state.province}
                            onClick={this.getRegencyChange} onChange={this.handleChange}>
                            <option value="choose_default">Choose Province</option>
                            { thisProvs }
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 rege">
                      <div className="form-group">
                        <span className="regency">regencies</span>
                        <div className="rvi">
                          <select name="regency" className="form-control" value={this.state.regency}
                            onClick={ this.getDistrictChange} onChange={this.handleChange}>
                            <option value="choose_default">Choose Regency</option>
                            { thisRegency }
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 dist">
                      <div className="form-group">
                        <span className="district">district</span>
                        <div className="rvi">
                          <select name="district" value={this.state.district} className="form-control"
                            onChange={this.handleChange}>
                            <option value="choose_default">Choose District</option>
                            { thisDistrict }
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="address">address</span>
                      <div className="rvi">
                        <textarea name="address" value={this.state.address} className="form-control posy"
                          spellCheck="false" onChange={this.handleChange}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
              <button className="btn btn-primary bry">SAVE</button>
            </div>
            </form>
            <div className={classnames('line-scale-pulse-out loading_', {'line-scale-pulse-in': this.state.isLoading === true})}>
              <div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalAddress;
