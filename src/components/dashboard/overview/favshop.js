import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class FavShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4
    }
  }
  render() {
    return (
      <div className="favshop_content">
        <div className="bege">
          <div className="title_">
            <p className="pur">Favorite Shop's</p>
          </div>
          <div className="icons">
            <div className="colap">
              <a href="#" className="sh"><span className="icon ion-chevron-down"></span></a>
            </div>
            <div className="showm">
              <a href="#" className="sh"><span className="icon ion-arrow-expand"></span></a>
            </div>
          </div>
        </div>
        <div className="content_list" style={{backgroundColor: '#f9f9f9'}}>
          <div className="img_thumb">
            <div className="cftg" style={{backgroundImage: 'url(/images/dummy/products/humio.png)'}}></div>
          </div>
          <div className="name_p">
            <span className="ajny">Travel busy board</span>
          </div>
          <div className="dat">
          <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.rating}
              emptyStarColor={'#dedede'} />
          </div>
          <div className="pric">
            <span className="jew">Surabaya</span>
          </div>
        </div>
        <div className="content_list">
          <div className="img_thumb">
            <div className="cftg" style={{backgroundImage: 'url(/images/dummy/products/xmasshot.jpg)'}}></div>
          </div>
          <div className="name_p">
            <span className="ajny">Small Wooden Bow and Arrows Natural Children</span>
          </div>
          <div className="dat">
          <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.rating}
              emptyStarColor={'#dedede'} />
          </div>
          <div className="pric">
            <span className="jew">Yogyakarta</span>
          </div>
        </div>
        <div className="content_list" style={{backgroundColor: '#f9f9f9'}}>
          <div className="img_thumb">
            <div className="cftg" style={{backgroundImage: 'url(/images/dummy/products/flip-clock.png)'}}></div>
          </div>
          <div className="name_p">
            <span className="ajny">Nerf Hammershot</span>
          </div>
          <div className="dat">
          <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.rating}
              emptyStarColor={'#dedede'} />
          </div>
          <div className="pric">
            <span className="jew">Bali</span>
          </div>
        </div>
      </div>
    )
  }
}

export default FavShop;
