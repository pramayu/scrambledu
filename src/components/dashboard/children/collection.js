import React, { Component } from 'react';
import DashNav from '../../../shared/dashboardnav';

class Collection extends Component {
  render() {
    return (
      <div>
        <DashNav caption="Collection" childcap="Bookmarks your favorite item"/>
        <div className="collex">
          <div className="grus">
            <div className="colect">
              <div className="ajetw">
                <div className="imagert">
                  <div className="djr" style={{backgroundImage: 'url(/images/default/xd.jpg)'}}></div>
                  <p className="najrt">Scrumbes</p>
                  <div className="dqwpi">
                    <div className="dhery">
                      <span className="icon ion-ios-compose-outline"></span>
                    </div>
                    <div className="djqo">
                      <span className="icon ion-ios-trash-outline"></span>
                    </div>
                    <div className="djqpi">
                      <span className="icon ion-ios-crop"></span>
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

export default Collection;
