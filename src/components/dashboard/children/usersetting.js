import React, { Component } from 'react';
import DashNav from '../../../shared/dashboardnav';

class UserSetting extends Component {
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
                <div className="cage">
                  <span className="icon ion-android-arrow-dropdown"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="preferences">
            <div className="hed">
              <div className="tirl">
                <span className="teq">2.preferences</span>
              </div>
              <div className="clap">
                <div className="cage">
                  <span className="icon ion-android-arrow-dropdown"></span>
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
                <div className="cage">
                  <span className="icon ion-android-arrow-dropdown"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="bank">
            <div className="hed">
              <div className="tirl">
                <span className="teq">4.bank accounts</span>
              </div>
              <div className="clap">
                <div className="cage">
                  <span className="icon ion-android-arrow-dropdown"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="email">
            <div className="hed">
              <div className="tirl">
                <span className="teq">5.emails</span>
              </div>
              <div className="clap">
                <div className="cage">
                  <span className="icon ion-android-arrow-dropdown"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSetting;
