import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import DashNav from '../../../shared/dashboardnav';

class Favorite extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 4
    }
  }

  render() {
    return (
      <div>
        <DashNav caption="Favorite" childcap="Bookmarks your favorite shop's"/>
        <div className="favorie">
          <div className="grus">
            <div className="colect">
              <div className="ajetw">
                <div className="imagert">
                  <div className="djr" style={{backgroundImage: 'url(/images/default/xd.jpg)'}}></div>
                  <p className="najrt">Scrumbes</p>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    emptyStarColor={'#dedede'} />
                  <div className="dqwpi newqyt">
                    <div className="dhery">
                      <span className="icon ion-ios-upload-outline"></span>
                    </div>
                    <div className="djqpi ndhur">
                      <span className="icon ion-ios-heart"></span>
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

export default Favorite;
