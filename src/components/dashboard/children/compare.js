import React, { Component } from 'react';
import DashNav from '../../../shared/dashboardnav';

class Compare extends Component {
  render() {
    return (
      <div>
        <DashNav caption="Compare Stuff" childcap="Compare products to get quality goods"/>
        <div className="comparex">
          <div className="grus">
            <div className="colect">
              <div className="ajetw">
                <div className="imagert">
                  <div className="djr" style={{backgroundImage: 'url(/images/default/xd.jpg)'}}></div>
                  <p className="najrt">Maid Dress</p>
                  <div className="dqwpi">
                    <div className="dhery">
                      <span className="icon ion-ios-compose-outline"></span>
                    </div>
                    <div className="djqo">
                      <span className="icon ion-ios-trash-outline"></span>
                    </div>
                    <div className="djqpi">
                      <span className="icon ion-ios-browsers-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Compare;
