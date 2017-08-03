import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      active: '1'
    }
  }
  componentWillMount() {
    this.setState({ height: window.innerHeight })
  }

  setCollapse(key) {
    this.setState({
      active: key
    })
  }

  render() {
    return (
      <div>
        <div className="main-dashboard">
          <div className="content">
            <div className="left-navbar" style={{height: this.state.height + 'px'}}>
              <div className="logo">
                <span className="logo_text">Mix<span className="u">Mart</span></span>
                <span className="icon ion-navicon-round pull-right"></span>
              </div>
              <div className="profile_pc">
                <div className="pro_img">
                  <div className="anjay" style={{backgroundImage: 'url(/images/default/xd.jpg)'}}>
                    <div className="edt">
                      <div className="icn">
                        <span className="icon ion-ios-gear"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="name_s">
                  <span className="ndme">Entis Sutisna</span>
                  <p className="position">Owner</p>
                </div>
              </div>
              <div className="basic_info">
                <div className="basic_">
                  <p className="bi" onClick={this.setCollapse.bind(this, '1')}>PROFILE
                    <span className={classnames('icon ion-arrow-down-b pull-right', {'jduet': '1' === this.state.active})}></span>
                  </p>
                </div>
                <div className={classnames('non_seller vui', { 'dhetr': '1' === this.state.active})}>
                  <ul className="list-unstyled viu">
                    <li><span className="cfe sped"><span className="icon ion-ios-speedometer-outline"></span></span>
                      <Link to="/user/dashboard" activeClassName="actives">Dashboard</Link>
                    </li>
                    <li><span className="cfe set"><span className="icon ion-ios-gear-outline"></span></span>
                      <Link to="/user/setting" activeClassName="actives">Setting Account</Link>
                    </li>
                    <li><span className="cfe"><span className="icon ion-ios-heart-outline"></span></span>
                      <Link to="/user/collection" activeClassName="actives">Collection</Link>
                    </li>
                    <li><span className="cfe"><span className="icon ion-ios-folder-outline"></span></span>
                      <a href="">Purchase</a>
                    </li>
                    <li><span className="cfe marks"><span className="icon ion-ios-bookmarks-outline"></span></span>
                      <Link to="/user/review-product" activeClassName="actives">Reviews</Link>
                    </li>
                    <li><span className="cfe comp"><span className="icon ion-ios-browsers-outline"></span></span>
                      <Link to="/user/compares" activeClassName="actives">Compare</Link>
                    </li>
                    <li><span className="cfe brief"><span className="icon ion-ios-briefcase-outline"></span></span>
                      <Link to="/user/favorites" activeClassName="actives">Favorite Shop</Link>
                    </li>
                  </ul>
                </div>
                <div className="basic_">
                  <p className="bi" onClick={this.setCollapse.bind(this, '2')}>SHOP
                    <span className={classnames('icon ion-arrow-down-b pull-right', {'jduet': '2' === this.state.active})}></span>
                  </p>
                </div>
                <div className={classnames('non_seller vui', { 'dhetr': '2' === this.state.active})}>
                  <ul className="list-unstyled viu">
                    <li><span className="cfe"><span className="icon ion-ios-albums-outline"></span></span>
                      <Link to="/shop/dashboard" activeClassName="actives">my shop</Link>
                    </li>
                    <li><span className="cfe"><span className="icon ion-ios-book-outline"></span></span><a href="#">Sell</a></li>
                    <li><span className="cfe chat"><span className="icon ion-ios-chatboxes-outline"></span></span><a href="#">Messages</a></li>
                    <li><span className="cfe part"><span className="icon ion-ios-flower-outline"></span></span><a href="#">Partner</a></li>
                    <li><span className="cfe"><span className="icon ion-ios-analytics-outline"></span></span><a href="#">Statistic</a></li>
                    <li><span className="cfe trans"><span className="icon ion-ios-box-outline"></span></span><a href="#">Transaction</a></li>
                    <li><span className="cfe"><span className="icon ion-ios-pulse-strong"></span></span><a href="#">Manage Shop</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="top_n">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
