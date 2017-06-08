import React, { Component } from 'react';

import Header from '../../shared/header';

class MainPage extends Component {
  render() {
    let { commons } = this.props;
    return (
      <div>
        <Header commons={commons}/>
      </div>
    )
  }
}

export default MainPage;
