import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';

import DashNav from '../../../shared/dashboardnav';
import { settingUser } from '../../../../validate/setting';
import ModalAddress from './modal_address';
import ModalBank from './modal_bank';
import BankAccountList from './bank_account_list';
import {
  setFetchAccount,
  editUserAccount,
  editUserPrefrences,
  getUserPreferences,
  getProvince,
  getRegency,
  getDistrict,
  addAddressReceiver,
  getAddressReceiver,
  deleteAddressReceiver,
  getEditAddress,
  getBankName,
  addNewBankAccount,
  delBankNewAccount,
  sendOtpCode,
  updateBankData,
  getBankData,
  deleteBankData } from '../../../actions/accounts';


class UserSetting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      active: '1',
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      birthday: '',
      gender: '',
      phone: '',
      avatar: '',
      newsletter: '',
      reviews: '',
      feature: '',
      security: '',
      languages: '',
      errors: {},
      isLoading: false,
      identifier: '',
      receiver: '',
      phone_addr: '',
      province: 0,
      regency: 0,
      district: 0,
      address: '',
      zipcode: '',
      address_edt: false,
      addr_id: '',
      bankAcId: ''
    }
    this.birthChange = this.birthChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.userSubmit = this.userSubmit.bind(this)
    this.preferenceChange = this.preferenceChange.bind(this)
    this.resetEditAddr = this.resetEditAddr.bind(this)
    this.getBankName = this.getBankName.bind(this)
  }

  componentWillMount() {
    this.props.setFetchAccount(this.props.current_user.user.id)
    this.props.getUserPreferences(this.props.current_user.user.id)
    this.props.getProvince()
    this.props.getAddressReceiver(this.props.current_user.user.id)
    this.props.getBankData(this.props.current_user.user.id)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      firstname: nextProps.setting.accounts.firstname ? nextProps.setting.accounts.firstname : '',
      lastname: nextProps.setting.accounts.lastname ? nextProps.setting.accounts.lastname : '',
      username: nextProps.setting.accounts.username ? nextProps.setting.accounts.username : '',
      email: nextProps.setting.accounts.email ? nextProps.setting.accounts.email : '',
      birthday: nextProps.setting.accounts.birthday ? nextProps.setting.accounts.birthday : '',
      gender: nextProps.setting.accounts.gender ? nextProps.setting.accounts.gender : '',
      phone: nextProps.setting.accounts.phone ? nextProps.setting.accounts.phone : '',
      avatar: nextProps.setting.accounts.avatar ? nextProps.setting.accounts.avatar : '',
      startDate: moment(nextProps.setting.accounts.birthday),
      newsletter: nextProps.preferences.preferences.newsletter ? nextProps.preferences.preferences.newsletter : '',
      reviews: nextProps.preferences.preferences.reviews ? nextProps.preferences.preferences.reviews : '',
      feature: nextProps.preferences.preferences.feature ? nextProps.preferences.preferences.feature : '',
      security: nextProps.preferences.preferences.security ? nextProps.preferences.preferences.security : '',
      languages: nextProps.preferences.preferences.languages ? nextProps.preferences.preferences.languages : ''
    })
  }

  isValid() {
    let { errors, isValid } = settingUser(this.state);
    if(!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  birthChange(date) {
    this.setState({
      startDate: date,
      birthday: date._d
    })
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

  setCollapse(key) {
    this.setState({
      active: key
    })
  }

  userSubmit(e) {
    e.preventDefault()
    this.setState({
      isLoading: true
    })
    if(this.isValid()) {
      this.setState({ errors: {} })
      let that = this;
      this.props.editUserAccount(this.state, this.props.current_user.user._id).then(() => {
        setTimeout(function () {
          that.setState({
            isLoading: false
          })
        }, 3000);
      })
    }
  }

  preferenceChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value
    })
    let setting = {
      [e.target.name]: value
    }
    this.props.editUserPrefrences(setting, this.props.current_user.user._id)
  }

  deleteAddressReceiver(id) {
    this.props.deleteAddressReceiver(id)
  }

  findAddressById(id) {
    _.result(_.find(this.props.address, (addr) => {
      if(id === addr._id) {
        this.setState({
          identifier: addr.identifier,
          receiver: addr.receiver,
          phone_addr: addr.phone,
          province: addr.province._id,
          regency: addr.regency._id,
          district: addr.district._id,
          address: addr.address,
          zipcode: addr.zipcode,
          address_edt: true,
          addr_id: addr._id
        })
      }
    }))
  }

  resetEditAddr() {
    this.setState({
      identifier: '',
      receiver: '',
      phone_addr: '',
      province: 0,
      regency: 0,
      district: 0,
      address: '',
      zipcode: '',
      address_edt: false,
      addr_id: '',
    })
  }

  getBankName() {
    this.props.getBankName();
    let data = {
      user: this.props.current_user.user._id
    }
    this.props.addNewBankAccount(this.props.current_user.user._id, data).then((res) => {
      this.setState({
        bankAcId: res.data.bank._id,
        newAc: true
      })
    })
  }

  render() {
    let address = Object.assign([], this.props.address)
    let _banks = Object.assign([], this.props.bank_accounts)
    let addressLoop = (
      address.map((addr, id) => {
        return (
          <ul key={id} className={classnames('list-unstyled chft cgyuo', {'cgyuo_': (id + 1)%2 === 0})}>
            <li className="name">{ addr.identifier }</li>
            <li className="receiver">{ addr.receiver }</li>
            <li className="phone">{ addr.phone }</li>
            <li className="adres">
              {
                addr.address + ', '
                + addr.district.name.slice(0).toLowerCase() + ', '
                + addr.regency.name.slice(0).toLowerCase() + ', '
                + addr.province.name.slice(0).toLowerCase() + ', '
                + addr.zipcode
              }
            </li>
            <li className="action">
              <span className="fa fa-pencil-square-o" onClick={this.findAddressById.bind(this, addr._id)}
                data-toggle="modal" data-target="#myModal"></span>
              <span className="fa fa-trash-o" onClick = { this.deleteAddressReceiver.bind(this, addr._id) }></span>
            </li>
          </ul>
        )
      })
    )

    let bankLoop = (
      _banks.map((bank, id) => {
        return (
          <BankAccountList bank={bank} id={id} key={id}
            deleteBankData={ this.props.deleteBankData }/>
        )
      })
    )

    let addr_ = {
      _id: this.state.addr_id,
      identifier: this.state.identifier,
      receiver: this.state.receiver,
      phone_addr: this.state.phone_addr,
      province: this.state.province,
      regency: this.state.regency,
      district: this.state.district,
      address: this.state.address,
      zipcode: this.state.zipcode,
      address_edt: this.state.address_edt,
    }

    let bankAc = {
      _id: this.state.bankAcId,
      newAc: this.state.newAc
    }

    return (
      <div>
        <DashNav caption="Settings" childcap="Give us valid data"/>
        <div className="user-setting">
          <div className={classnames('update-info', {'update-info-hover': this.state.isLoading === true})}>
            <span className="djwty">Congratulations</span>
            <p className="twre">Update Success</p>
          </div>
          <div className="personal-info">
            <div className="hed">
              <div className="tirl">
                <span className="teq">1.personal information</span>
              </div>
              <div className="clap">
                <div className={classnames('cage', {'norotate': '1' === this.state.active})} onClick={ this.setCollapse.bind(this, '1')}>
                  <span className="icon ion-android-arrow-dropdown"></span>
                </div>
              </div>
            </div>
            <div className={classnames('anhtry', {'showcollapse': '1' === this.state.active})}>
              <div className="personal-content">
                <form className="frm_setting" onSubmit={this.userSubmit}>
                  <div className="img_pro">
                    <div className="img_update" style={{backgroundImage: 'url(/images/default/xd.jpg'}}></div>
                    <input type="hidden" name="avatar" value={this.state.avatar} onChange={this.handleChange}/>
                    <button className="btn btn-profile">SAVE</button>
                  </div>
                  <div className="form_pro">
                <div className="form-group xfdt">
                  <div className="bfhr">
                    <label>firstname</label>
                    <input type="text" className="form-control" name="firstname"
                      value={this.state.firstname} onChange={this.handleChange}/>
                  </div>
                  <div className="lser">
                    <label>lastname</label>
                    <input type="text" className="form-control" name="lastname"
                      value={this.state.lastname} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">username</label>
                  <input type="text" className="form-control" name="username"
                    value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="">email</label>
                  <input type="email" className="form-control" name="email"
                    value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="">birthday</label>
                  <DatePicker selected={this.state.startDate} onChange={this.birthChange} name="birthday"/>
                </div>
                <div className="form-group">
                  <label htmlFor="">gender</label>
                  <select className="form-control" name="gender"
                    value={this.state.gender} onChange={this.handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">mobile phone</label>
                    <input type="text" className="form-control" name="phone"
                      value={this.state.phone} onChange={this.handleChange}/>
                    <span className="exam">Example: +6285727072xxx</span>
                  </div>
              </div>
                </form>
            </div>
            </div>
          </div>
          <div className="preferences">
            <div className="hed">
              <div className="tirl">
                <span className="teq">2.preferences</span>
              </div>
              <div className="clap">
                <div className={classnames('cage', {'norotate': '2' === this.state.active})} onClick={ this.setCollapse.bind(this, '2')}>
                  <span className="icon ion-android-arrow-dropdown"></span>
                </div>
              </div>
            </div>
            <div className={classnames('pref', {'showcollapse': '2' === this.state.active})}>
              <div className="language">
                <p className="tileo">Language</p>
                <div className="contr">
                  <span className="dget">Choose your default language:</span>
                  <div className="form-group">
                    <select className="form-control" value={this.state.languages} name="languages" onChange={this.preferenceChange}>
                      <option value="indonesia">Indonesia</option>
                      <option value="english">English</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="notif">
                <div className="language">
                  <p className="tileo">notification</p>
                  <div className="jtuy contr">
                    <div className="form-group">
                      <label>
                        <p className="ney">Newsletter</p>
                        <input type="checkbox" name="newsletter" checked={this.state.newsletter} onChange={this.preferenceChange}/>
                        <span className="bstr"> Any promotions, tips & tricks and information updates</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>
                        <p className="ney">Reviews</p>
                        <input type="checkbox" name="reviews" checked={this.state.reviews} onChange={this.preferenceChange}/>
                        <span className="bstr"> Every Review and Comment I received</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>
                        <p className="ney">Feature Update</p>
                        <input type="checkbox" name="feature" checked={this.state.feature} onChange={this.preferenceChange}/>
                        <span className="bstr"> Notification of any new features or feature updates.</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>
                        <p className="ney">Security and Violations</p>
                        <input type="checkbox" name="security" checked={this.state.security} onChange={this.preferenceChange}/>
                        <span className="bstr"> Email notifications regarding security guides, login device notifications, account banned.</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="adresses">
            <div className="hed">
              <div className="tirl">
                <span className="teq">3.adresses</span>
              </div>
              <div className="clap">
                <div className={classnames('cage', {'norotate': '3' === this.state.active})} onClick={ this.setCollapse.bind(this, '3')}>
                  <span className="icon ion-android-arrow-dropdown"></span>
                </div>
              </div>
            </div>
            <div className={classnames('afress', {'showcollapse': '3' === this.state.active})}>
              <button className="btn btn-new-adress" data-toggle="modal" data-target="#myModal">ADD ADDRESS</button>
              <div className="dheiuy">
                <ul className="list-unstyled chft">
                  <li className="name">IDENTIFIER</li>
                  <li className="receiver">RECEIVER</li>
                  <li className="phone">PHONE</li>
                  <li className="adres">ADDRESS</li>
                  <li className="action">ACTION</li>
                </ul>
                { addressLoop }
              </div>
            </div>
          </div>
          <div className="bank">
            <div className="hed">
              <div className="tirl">
                <span className="teq">4.bank accounts</span>
              </div>
              <div className="clap">
                <div className={classnames('cage', {'norotate': '4' === this.state.active})} onClick={ this.setCollapse.bind(this, '4')}>
                  <span className="icon ion-android-arrow-dropdown"></span>
                </div>
              </div>
            </div>
            <div className={classnames('afress', {'showcollapse': '4' === this.state.active})}>
              <button className="btn btn-new-adress" data-toggle="modal" data-target="#myModalBank" onClick={this.getBankName}>
                ADD BANK ACCOUNT
              </button>
              <div className="dheiuy">
                <ul className="list-unstyled chft">
                  <li className="name">OWNER</li>
                  <li className="receiver">NUMBER</li>
                  <li className="phone">BRANCH</li>
                  <li className="adres">BANK NAME</li>
                  <li className="action">ACTION</li>
                </ul>
                { bankLoop }
              </div>
            </div>
          </div>
        </div>
        <ModalAddress provinces = { this.props.provinces } regencies = { this.props.regencies }
          districts = { this.props.districts } getRegency = { this.props.getRegency } current_user = { this.props.current_user.user }
          getDistrict = { this.props.getDistrict } addAddressReceiver = { this.props.addAddressReceiver } addrs_ = { addr_ }
          resetEditAddr = { this.resetEditAddr } getEditAddress = {this.props.getEditAddress}/>
        <ModalBank current_user = { this.props.current_user.user} bank = { this.props.bank }
          bankAc = { bankAc } delBankNewAccount = {this.props.delBankNewAccount} sendOtpCode = {this.props.sendOtpCode}
          updateBankData = { this.props.updateBankData } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    setting: state.accounts,
    current_user: state.cuser,
    preferences: state.preferences,
    provinces: state.provinces,
    regencies: state.regencies,
    districts: state.districts,
    address: state.addresses,
    bank: state.bank,
    bank_accounts: state.bank_accounts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFetchAccount: (id) => dispatch(setFetchAccount(id)),
    editUserAccount: (data, id) => dispatch(editUserAccount(data, id)),
    editUserPrefrences: (data, id) => dispatch(editUserPrefrences(data, id)),
    getUserPreferences: (id) => dispatch(getUserPreferences(id)),
    getProvince: () => dispatch(getProvince()),
    getRegency: (id) => dispatch(getRegency(id)),
    getDistrict: (id) => dispatch(getDistrict(id)),
    addAddressReceiver: (data, id) => dispatch(addAddressReceiver(data, id)),
    getAddressReceiver: (id) => dispatch(getAddressReceiver(id)),
    deleteAddressReceiver: (id) => dispatch(deleteAddressReceiver(id)),
    getEditAddress: (id, user_id, data) => dispatch(getEditAddress(id, user_id, data)),
    getBankName: () => dispatch(getBankName()),
    addNewBankAccount: (user_id, data) => dispatch(addNewBankAccount(user_id, data)),
    delBankNewAccount: (user_id, id) => dispatch(delBankNewAccount(user_id, id)),
    sendOtpCode: (user_id, id) => dispatch(sendOtpCode(user_id, id)),
    updateBankData: (user_id, id, data) => dispatch(updateBankData(user_id, id, data)),
    getBankData: (user_id) => dispatch(getBankData(user_id)),
    deleteBankData: (id) => dispatch(deleteBankData(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSetting);
