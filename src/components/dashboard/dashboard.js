import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height
    }
  }
  componentWillMount() {
    this.setState({ height: window.innerHeight })
  }
  render() {
    return (
      <div>
        <div className="main-dashboard">
          <div className="content">
            <div className="left-navbar" style={{height: this.state.height + 'px'}}>
              <div className="logo">
                <span className="logo_text">MIX<span className="u">MART</span></span>
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
                  <p className="bi">PROFILE <span className="icon ion-arrow-down-b pull-right"></span></p>
                </div>
                <div className="non_seller vui">
                  <ul className="list-unstyled viu">
                    <li className="actives"><span className="cfe sped"><span className="icon ion-ios-speedometer-outline"></span></span>
                      <a href="#">Dashboard</a>
                    </li>
                    <li><span className="cfe set"><span className="icon ion-ios-gear-outline"></span></span><a href="#">Setting Account</a></li>
                    <li><span className="cfe"><span className="icon ion-ios-heart-outline"></span></span><a href="#">Collection</a></li>
                    <li><span className="cfe"><span className="icon ion-ios-folder-outline"></span></span><a href="#">Purchase</a></li>
                    <li><span className="cfe marks"><span className="icon ion-ios-bookmarks-outline"></span></span><a href="#">Reviews</a></li>
                    <li><span className="cfe comp"><span className="icon ion-ios-browsers-outline"></span></span><a href="#">Compare</a></li>
                    <li><span className="cfe brief"><span className="icon ion-ios-briefcase-outline"></span></span><a href="#">Favorite Shop</a></li>
                  </ul>
                </div>
                <div className="basic_">
                  <p className="bi">SHOP <span className="icon ion-arrow-down-b pull-right"></span></p>
                </div>
                <div className="non_seller vui">
                  <ul className="list-unstyled viu">
                    <li><span className="cfe"><span className="icon ion-ios-albums-outline"></span></span><a href="#">my shop</a></li>
                    <li><span className="cfe"><span className="icon ion-ios-book-outline"></span></span><a href="#">Sell</a></li>
                    <li><span className="cfe chat"><span className="icon ion-ios-chatboxes-outline"></span></span><a href="#">Messages</a></li>
                    <li><span className="cfe part"><span className="icon ion-ios-flower-outline"></span></span><a href="#">Partner</a></li>
                    <li><span className="cfe"><span className="icon ion-ios-analytics-outline"></span></span><a href="#">Statistic</a></li>
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
