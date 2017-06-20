import React, { Component } from 'react';
import Purchased from '../overview/purchased';
import Collev from '../overview/collev';
import Compare from '../overview/compare';
import FavShop from '../overview/favshop';
import DashNav from '../../../shared/dashboardnav';

class DashChild extends Component {
  render() {
    return (
      <div>
        <DashNav caption="Hello, Entis!" childcap="Wellcome back to the Mizmart"/>
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
    )
  }
}

export default DashChild;
