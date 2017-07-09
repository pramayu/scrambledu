import React, { Component } from 'react';
import classnames from 'classnames';

import { addressReceiver } from '../../../../validate/address';

class ModalAddress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      receiver: '',
      phone_addr: '',
      province: 'choose_default',
      regency: 'choose_default',
      district: 'choose_default',
      address: '',
      zipcode: '',
      errors: {},
      address_edt: false,
      isLoading: false,
      addr_id: ''
    }
    this.getRegencyChange = this.getRegencyChange.bind(this)
    this.getDistrictChange = this.getDistrictChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.addrs_.address_edt === true) {
      this.setState({
        identifier: nextProps.addrs_.identifier ? nextProps.addrs_.identifier : '',
        receiver: nextProps.addrs_.receiver ? nextProps.addrs_.receiver : '',
        phone_addr: nextProps.addrs_.phone_addr ? nextProps.addrs_.phone_addr : '',
        address: nextProps.addrs_.address ? nextProps.addrs_.address : '',
        zipcode: nextProps.addrs_.zipcode ? nextProps.addrs_.zipcode : '',
        address_edt: nextProps.addrs_.address_edt ? nextProps.addrs_.address_edt : false,
        addr_id: nextProps.addrs_._id ? nextProps.addrs_._id : '',
      })
    }
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
          phone_addr: '',
          province: 'choose_default',
          regency: 'choose_default',
          district: 'choose_default',
          address: '',
          zipcode: '',
          addr_id: ''
        })
        let that = this;
        setTimeout(function () {
          that.setState({
            isLoading: false
          })
        }, 1000);
      })
    }
  }

  handleEditSubmit(e) {
    e.preventDefault()
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.getEditAddress(this.state.addr_id, this.props.current_user._id, this.state).then(() => {
        this.setState({
          identifier: '',
          receiver: '',
          phone_addr: '',
          province: 'choose_default',
          regency: 'choose_default',
          district: 'choose_default',
          address: '',
          zipcode: '',
          addr_id: ''
        })
        let that = this;
        setTimeout(function () {
          that.setState({
            isLoading: false
          })
        }, 1000);
      })
    }
  }


  render() {
    let { addrs_ } = this.props;
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
    let { errors } = this.state;
    return (
      <div className="modal fade kor" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={this.state.address_edt === true ? this.handleEditSubmit : this.handleSubmit}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.resetEditAddr}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">{this.state.address_edt === true ? 'Edit' : 'New'} Address</h4>
              </div>
              <div className="modal-body">
                <div className="body-content">
                  <div className="form-add">
                    <div className={ classnames('form-group', { 'has-error': errors.identifier })}>
                      <span className="identifier">identifier</span>
                      <div className='rvi'>
                        <input type="text" value={this.state.identifier} name="identifier" className="form-control"
                          spellCheck="false" onChange={this.handleChange} autoComplete="off"/>
                      </div>
                    </div>
                    <div className={ classnames('form-group', { 'has-error': errors.receiver })}>
                      <span className="receiver">receiver</span>
                      <div className="rvi">
                        <input type="text" name="receiver" value={this.state.receiver} className="form-control"
                          spellCheck="false" onChange={this.handleChange} autoComplete="off"/>
                      </div>
                    </div>
                    <div className="col-md-6" style={{paddingLeft: '0px', paddingRight: '7.5px'}}>
                      <div className={ classnames('form-group', { 'has-error': errors.phone_addr })}>
                        <span className="phone">phone</span>
                        <div className="rvi">
                          <input type="text" name="phone_addr" value={this.state.phone_addr} className="form-control"
                            spellCheck="false" onChange={this.handleChange} autoComplete="off"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" style={{paddingRight: '0px', paddingLeft: '7.5px'}}>
                      <div className={ classnames('form-group', { 'has-error': errors.zipcode })}>
                        <span className="phone">zipcode</span>
                        <div className="rvi">
                          <input type="text" name="zipcode" value={this.state.zipcode} className="form-control"
                            spellCheck="false" onChange={this.handleChange} autoComplete="off"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 prov">
                      <div className={ classnames('form-group', { 'has-error': errors.province })}>
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
                      <div className={ classnames('form-group', { 'has-error': errors.regency })}>
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
                      <div className={ classnames('form-group', { 'has-error': errors.district })}>
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
                    <div className={ classnames('form-group', { 'has-error': errors.address })}>
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
