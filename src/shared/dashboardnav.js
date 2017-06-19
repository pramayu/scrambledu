import React, { Component } from 'react';


class DashNav extends Component {
  render() {
    return (
      <div className="brop">
        <div className="nav_dash" id="top_n">
        <div className="left_sec">
        <span className="hel">{ this.props.caption }!</span>
        <p className="wel">{ this.props.childcap }</p>
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
        <span className="hel">{ this.props.caption }!</span>
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
    )
  }
}

export default DashNav;
