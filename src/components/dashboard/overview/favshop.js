import React, { Component } from 'react';

class FavShop extends Component {
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
        <div className="content_list">
          <ul className="list-unstyled dre"></ul>
        </div>
      </div>
    )
  }
}

export default FavShop;
