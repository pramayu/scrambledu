import React, { Component } from 'react';

class Collev extends Component {
  render() {
    return (
      <div className="collev_content">
        <div className="bege">
          <div className="title_">
            <p className="pur">Collection</p>
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
            <span className="ajny">Latch board, Travel busy board, Toy for autism ...</span>
          </div>
          <div className="pric">
            <span className="jew">USD2000</span>
          </div>
        </div>
        <div className="content_list">
          <div className="img_thumb">
            <div className="cftg" style={{backgroundImage: 'url(/images/dummy/products/xmasshot.jpg)'}}></div>
          </div>
          <div className="name_p">
            <span className="ajny">Small Wooden Bow and Arrows Natural Children...</span>
          </div>
          <div className="pric">
            <span className="jew">USD500</span>
          </div>
        </div>
        <div className="content_list" style={{backgroundColor: '#f9f9f9'}}>
          <div className="img_thumb">
            <div className="cftg" style={{backgroundImage: 'url(/images/dummy/products/flip-clock.png)'}}></div>
          </div>
          <div className="name_p">
            <span className="ajny">Nerf Hammershot 8-Shot Cylinder</span>
          </div>
          <div className="pric">
            <span className="jew">USD260</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Collev;
