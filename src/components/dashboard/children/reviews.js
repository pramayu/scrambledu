import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import DashNav from '../../../shared/dashboardnav';

class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 4
    }
  }

  render() {
    return (
      <div>
        <DashNav caption="Reviews" childcap="Give us a review to improve our performance"/>
        <div className="reviwq">
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
                      <span className="icon ion-ios-trash-outline"></span>
                    </div>
                    <div className="djqpi ndhur">
                      <span className="icon ion-ios-lightbulb-outline"></span>
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

export default Reviews;
