import React, { Component } from 'react';
import Purchased from './overview/purchased';
import Collev from './overview/collev';
import Compare from './overview/compare';
import FavShop from './overview/favshop';

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
                    <li className="actives"><span className="cfe sped"><span className="icon ion-ios-speedometer-outline"></span></span><a href="#">Dashboard</a></li>
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
              <div className="brop">
                <div className="nav_dash" id="top_n">
                <div className="left_sec">
                <span className="hel">Hello, Entis!</span>
                <p className="wel">Welcome back to the Mixmart</p>
                </div>
                <div className="right_sec">
                <ul className="nav navbar-nav gpp">
                <li className="img_fg_2">
                <a><span className="icon ion-ios-bell-outline"></span></a>
                </li>
                <li className="img_fg_2">
                <a><span className="icon ion-ios-briefcase-outline ic-brief"></span></a>
                </li>
                <li className="img_fg_2">
                <a><span className="icon ion-ios-chatboxes-outline"></span></a>
                </li>
                <li className="img_fg_2 cart">
                <a><span className="icon ion-ios-box-outline"></span></a>
                </li>
                <li className="dropdown img_fg">
                <a className="dropdown-toggle" style={{backgroundColor: 'transparent'}} data-toggle="dropdown">
                <span className="img_thumb" style={{backgroundImage: 'url(/images/default/xd.jpg)'}}></span>
                </a>
                <ul className="dropdown-menu list-unstyled dtrt_ fgrt_">
                <li className="profile_">
                <div className="pto">
                <span className="bg_profile_big"style={{backgroundImage: 'url(/images/default/profile.png)'}}></span>
                </div>
                <div className="txcs">
                <p className="greeting">What's Up..</p>
                <span className="name_d">scrambleeg</span>
                </div>
                </li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Open Shop</a></li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Purchase</a></li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Wishlists</a></li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Reviews</a></li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Setting</a></li>
                <li className="cvft lgt"><a style={{paddingTop: '6px'}} href="#">Log Out</a></li>
                </ul>
                </li>
                </ul>
                </div>
                </div>
                <div className="fix_nav" id="bottom_n">
                <div className="lef_nav">
                <span className="hel">Hello, Entis!</span>
                </div>
                <div className="right_nav">
                <ul className="nav navbar-nav gpp">
                <li className="img_fg_2">
                <a><span className="icon ion-ios-bell-outline"></span></a>
                </li>
                <li className="img_fg_2">
                <a><span className="icon ion-ios-briefcase-outline ic-brief"></span></a>
                </li>
                <li className="img_fg_2">
                <a><span className="icon ion-ios-chatboxes-outline"></span></a>
                </li>
                <li className="img_fg_2 cart">
                <a><span className="icon ion-ios-box-outline"></span></a>
                </li>
                <li className="dropdown img_fg">
                <a className="dropdown-toggle" style={{backgroundColor: 'transparent'}} data-toggle="dropdown">
                <span className="img_thumb" style={{backgroundImage: 'url(/images/default/xd.jpg)'}}></span>
                </a>
                <ul className="dropdown-menu list-unstyled dtrt_ fgrt_">
                <li className="profile_">
                <div className="pto">
                <span className="bg_profile_big"style={{backgroundImage: 'url(/images/default/profile.png)'}}></span>
                </div>
                <div className="txcs">
                <p className="greeting">What's Up..</p>
                <span className="name_d">scrambleeg</span>
                </div>
                </li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Open Shop</a></li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Purchase</a></li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Wishlists</a></li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Reviews</a></li>
                <li className="cvft"><a style={{paddingTop: '6px'}} href="#">Setting</a></li>
                <li className="cvft lgt"><a style={{paddingTop: '6px'}} href="#">Log Out</a></li>
                </ul>
                </li>
                </ul>
                </div>
                </div>
              </div>
              <div className="content_dash">
                <div className="purchased">
                  <Purchased />
                </div>
                <div className="reviews">
                  <div className="phto" style={{backgroundImage: 'url(/images/default/xd.jpg)'}}></div>
                  <div className="narm">
                    <p className="kewq">Entis Sutisna</p>
                    <a href="#" className="more">MORE INFO</a>
                  </div>
                </div>
                <div className="collev">
                  <Collev />
                </div>
                <div className="compare">
                  <Compare />
                </div>
                <div className="profile">
                  <div className="jewkj">
                    <span className="txt_21">COLLECTION</span>
                    <p className="numb">5</p>
                    <a href="#" className="esd">VIEW MORE</a>
                  </div>
                </div>
                <div className="favshop">
                  <FavShop />
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
