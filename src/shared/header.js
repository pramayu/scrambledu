import React, { Component } from 'react';
import _ from 'lodash';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    }
  }

  render() {
    let { commons, isFetching, error } = this.props.commons;
    let header = null;
    if(isFetching === false && !_.isEmpty(commons)) {
      let xfd = commons[0].header[Math.floor(Math.random() * commons[0].header.length)]
      header = (
        <div className='img_header' style={{backgroundImage: 'url(' + xfd.image + ')'}}>
          <div className="img_cover">
            <div className="section_txt">
              <h1 className="txt_header" style={{textAlign: xfd.text_align, color: xfd.color}}>
              Find handmade and antique items on our website with very affordable quality and price.
              </h1>
              <button className="btn btn-explore btn-default">Let's Goo...</button>
            </div>
          </div>
        </div>
      )
    } else {
      header = '';
    }
    return (
      <div className='header_home'>
        { header }
      </div>
    )
  }
}

export default Header;
