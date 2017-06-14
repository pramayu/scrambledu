import React, { Component } from 'react';
import _ from 'lodash';
import classnames from 'classnames';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: [],
      subcategory: [],
      subcategory_id: '',
      category_id: '',
      mouseover: false
    }
  }

  _renderSubcategory(id) {
    this.setState({
      category: [],
      subcategory: [],
    });

    _.find(this.props.categories, (category) => {
      if(category._id === id){
        this.setState({
          category: category,
          category_id: id,
          mouseover: true
        })
      }
    })
  }

  _renderSection(id) {
    _.find(this.state.category.subcategories, (subcategory) => {
      if(subcategory._id === id) {
        this.setState({
          subcategory: subcategory,
          subcategory_id: id
        })
      }
    })
  }

  _renderUnshowDropdown() {
    this.setState({
      mouseover: false,
      category_id: ''
    });
  }

  render() {
    let subcategories = Object.assign([], this.state.category.subcategories)
    let section = Object.assign([], this.state.subcategory.section)
    let drp_dwn = null;
    let setCategories = (
      this.props.categories.map((category, id) => {
        return (
          <li key={id} className={ classnames('category category_hover', {'category_hover_2': category._id === this.state.category_id})}
            onMouseOver={this._renderSubcategory.bind(this, category._id)}>
            <a href="#">{category.name}</a>
          </li>
        )
      })
    )

    let setSubcategories = (
      subcategories.map((subcategory, id) => {
        return (
          <li key={id} className={ classnames('drp_left_container', {'drp_hover': subcategory._id.toString() === this.state.subcategory_id})}
            onMouseOver={this._renderSection.bind(this, subcategory._id)}>
            <a href="#">{ subcategory.name }</a>
            { _.isEmpty(subcategory.section) ? '' : <i className="icon ion-ios-arrow-forward pull-right"></i>}
          </li>
        )
      })
    )

    let setImagesDrop = (
      <div className="img_cat">
        <div className="img_cov" style={{backgroundImage: 'url(' +this.state.category.url+ ')'}}></div>
        <div className="pad_text_1">
          <p className="text_1">EDITOR'S CHOICE</p>
          <span className="text_2">{this.state.category.name}</span>
        </div>
      </div>
    )

    let setSection = (
      section.map((sec, id) => {
        return (
          <li key={id} className="by_ur_self">
            <a href="#">{ sec.name }</a>
          </li>
        )
      })
    )

    if(this.state.category.name === 'technology') {
      drp_dwn = (
        <div className={classnames('dropdown_', { 'dropdown_show': this.state.mouseover === true})}>
          <div className="drp_container" onMouseLeave={this._renderUnshowDropdown.bind(this)}>
            <div className="clm drp_1 clm_3">
              <ul className="list-unstyled let-dropdown blts">
                { setSubcategories }
              </ul>
            </div>
            <div className="clm drp_3">
              { setImagesDrop }
            </div>
          </div>
        </div>
      )
    } else {
      drp_dwn = (
        <div className={classnames('dropdown_', { 'dropdown_show': this.state.mouseover === true})}>
          <div className="drp_container" onMouseLeave={this._renderUnshowDropdown.bind(this)}>
            <div className="clm drp_1">
              <ul className="list-unstyled let-dropdown">
                { setSubcategories }
              </ul>
            </div>
            <div className="clm drp_2">
              <ul className={ classnames('section_container column_2 list-unstyled', {'column_3': section.length > 15})}>
              { setSection }
              </ul>
            </div>
            <div className="clm drp_3">
              { setImagesDrop }
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className="navbar navbar-default costume-navbar">
          <div className="container-fluid top" onMouseOver={this._renderUnshowDropdown.bind(this)}>
            <div className="navbar-header lf_nav"><a href="#" className="navbar-brand">MixMart.</a></div>
            <ul className="nav navbar-nav navbar-left center_nav">
              <form>
                <input type="text" className="form-control src" placeholder="Search products or store..."/>
                <span className="fa fa-search"></span>
              </form>
            </ul>
            <ul className="nav navbar-nav navbar-right rg_nav">
              <li><a href="#" className="satya"><i className='icon ion-ios-bell-outline'></i></a></li>
              {/*<li><a href="#" className="satya"><i className="icon ion-ios-heart-outline"></i></a></li> */}
              <li><a href="#" className="satya"><i className="icon ion-ios-browsers-outline"></i></a></li>
              <li className="fgt"><a href="#" className="satya"><i className="icon ion-ios-box-outline"></i></a></li>
              <li className="prf dropdown">
                <a className="satya dropdown-toggle" data-toggle="dropdown">
                  <span className="bg_profile"style={{backgroundImage: 'url(/images/default/profile.png)'}}></span>
                </a>
                <ul className="dropdown-menu list-unstyled dtrt_">
                  <li className="profile_">
                    <div className="pto">
                      <span className="bg_profile_big"style={{backgroundImage: 'url(/images/default/profile.png)'}}></span>
                    </div>
                    <div className="txcs">
                      <p className="greeting">What's Up..</p>
                      <span className="name_d">scrambleeg</span>
                    </div>
                  </li>
                  <li className="cvft"><a href="#">Open Shop</a></li>
                  <li className="cvft"><a href="#">Purchase</a></li>
                  <li className="cvft"><a href="#">Wishlists</a></li>
                  <li className="cvft"><a href="#">Reviews</a></li>
                  <li className="cvft"><a href="#">Setting</a></li>
                  <li className="cvft lgt"><a href="#">Log Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="container-fluid bottom">
            <ul className="nav navbar-nav main-menu">
              { setCategories }
            </ul>
          </div>
          <div style={{width: '100%', height: '10px', position: 'absolute', marginTop: '3px', zIndex: '9'}}
          onMouseOver={this._renderUnshowDropdown.bind(this)}></div>
        </div>
        { drp_dwn }
      </div>
    )
  }
}

export default Navbar;
