import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';
import { connect } from 'react-redux';

import DashNav from '../../../shared/dashboardnav';
import { setFetchAccount } from '../../../actions/accounts';


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
      newsletter: false,
      reviews: false,
      feature: false,
      security: false,
      language: '',
      errors: {}
    }
    this.birthChange = this.birthChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    this.props.setFetchAccount(this.props.current_user.user._id)
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
      startDate: moment(nextProps.setting.accounts.birthday)
    })
  }

  birthChange(date) {
    this.setState({
      startDate: date
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

  render() {
    return (
      <div>
        <DashNav caption="Settings" childcap="Give us valid data"/>
        <div className="user-setting">
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
                <form className="frm_setting">
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
                    <select className="form-control">
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
                        <input type="checkbox" name="newletter"/>
                        <span className="bstr"> Any promotions, tips & tricks and information updates</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>
                        <p className="ney">Reviews</p>
                        <input type="checkbox" name="reviews"/>
                        <span className="bstr"> Every Review and Comment I received</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>
                        <p className="ney">Feature Update</p>
                        <input type="checkbox" name="reviews"/>
                        <span className="bstr"> Notification of any new features or feature updates.</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>
                        <p className="ney">Security and Violations</p>
                        <input type="checkbox" name="reviews"/>
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
              <button className="btn btn-new-adress">ADD ADDRESS</button>
              <div className="dheiuy">
                <ul className="list-unstyled chft">
                  <li className="name">IDENTIFIER</li>
                  <li className="receiver">RECEIVER</li>
                  <li className="phone">PHONE</li>
                  <li className="adres">ADDRESS</li>
                  <li className="action">ACTION</li>
                </ul>
                <ul className="list-unstyled chft cgyuo">
                  <li className="name">Alamat Rumah</li>
                  <li className="receiver">Tiara Westlake</li>
                  <li className="phone">+6205727072248</li>
                  <li className="adres">Jalan Lely4, No.915, Condong Catur, Depok, Sleman, Yogyakarta, 55832</li>
                  <li className="action">
                    <span className="fa fa-pencil-square-o"></span>
                    <span className="fa fa-trash-o"></span>
                  </li>
                </ul>
                <ul className="list-unstyled chft cgyuo">
                  <li style={{backgroundColor: '#f7f7f7' }} className="name">Alamat Kost</li>
                  <li style={{backgroundColor: '#f7f7f7' }} className="receiver">Jack Frags</li>
                  <li style={{backgroundColor: '#f7f7f7' }} className="phone">+6205727072248</li>
                  <li style={{backgroundColor: '#f7f7f7' }} className="adres">Dusun Dalem, Desa Jinengdalem, Kec.Buleleng, Kab.Buleleng, Bali, 55832</li>
                  <li style={{backgroundColor: '#f7f7f7' }} className="action">
                    <span className="fa fa-pencil-square-o"></span>
                    <span className="fa fa-trash-o"></span>
                  </li>
                </ul>
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
              <button className="btn btn-new-adress">ADD BANK ACCOUNT</button>
              <div className="dheiuy">
                <ul className="list-unstyled chft">
                  <li className="name">OWNER</li>
                  <li className="receiver">NUMBER</li>
                  <li className="phone">BRANCH</li>
                  <li className="adres">BANK NAME</li>
                  <li className="action">ACTION</li>
                </ul>
                <ul className="list-unstyled chft cgyuo">
                  <li className="name">Entis Sutisna</li>
                  <li className="receiver">008801036884507</li>
                  <li className="phone">Singaraja</li>
                  <li className="adres">PT. BANK RAKYAT INDONESIA (PERSERO)</li>
                  <li className="action">
                    <span className="fa fa-pencil-square-o"></span>
                    <span className="fa fa-trash-o"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    setting: state.accounts,
    current_user: state.cuser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFetchAccount: (id) => dispatch(setFetchAccount(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSetting);
