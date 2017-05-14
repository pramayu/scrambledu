import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    let setCategories = (
      this.props.categories.map((category, id) => {
        return (
          <li key={id} className="category">
            <a href="#">{category.name}</a>
          </li>
        )
      })
    )
    return (
      <div className="navbar navbar-default costume-navbar">
        <div className="container-fluid top">
          <div className="navbar-header lf_nav"><a href="#" className="navbar-brand">_Scrambledu.</a></div>
          <ul className="nav navbar-nav navbar-left center_nav">
              <form>
                <input type="text" className="form-control src" placeholder="Search products or store..."/>
                <span className="fa fa-search"></span>
              </form>
          </ul>
          <ul className="nav navbar-nav navbar-right rg_nav">
            <li><a href="#" className="satya"><span className="fa fa-bell"></span></a></li>
            <li><a href="#" className="satya"><span className="fa fa-heart"></span></a></li>
            <li><a href="#" className="satya"><span className="fa fa-window-maximize"></span></a></li>
            <li><a href="#" className="satya"><span className="fa fa-shopping-bag"></span></a></li>
            <li><a href="#" className="satya"><span className="bg_profile" style={{backgroundImage: 'url(/images/default/profile.png)'}}></span></a></li>
          </ul>
        </div>
        <div className="container-fluid bottom">
          <ul className="nav navbar-nav main-menu">
            { setCategories }
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
