import React, { Component } from 'react';
import classnames from 'classnames';

import DashNav from '../../../shared/dashboardnav';

class MyShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '1'
    }
  }

  btnActiveTab(number) {
    this.setState({ active: number})
  }

  render() {
    return (
      <div>
        <DashNav caption="Main Shop's" childcap="Selling the best goods you have"/>
        <div className="content_dash">
          <div className="maximo_">
            <div className="info_reward_balance">
              <div className="tropi">
                <div className="our_tropi" style={{backgroundImage: 'url(/images/default/3.jpg)'}}></div>
              </div>
              <div className="balance">
                <div className="bala_ce">
                  <p className="money">500.00</p>
                  <span className="jiy">USD</span>
                  <p className="bakf">BALANCE</p>
                </div>
              </div>
            </div>
            <div className="task_">
              <div className="priority">
                <div className="pridt">
                  <div className="stae">
                    <p className="kdyt">HIGH PRIORITY</p>
                  </div>
                </div>
                <div className="djhui">
                  <span className="icon ion-ios-more"></span>
                </div>
              </div>
              <div className="title_o">
                <div className="fjdit">
                  <p className="sli">Beli garam sekilo.</p>
                  <span className="rye">05.07.2017 11:09:07 AM</span>
                </div>
              </div>
              <div className="contnet">
                <span className="fjhiu">Tong lo disuruh emak beli garam sekilo di warung, kalo kagak ada beli lang...</span>
              </div>
              <div className="whodf">
                <div className="djkhiup" style={{backgroundImage: 'url(/images/dummy/red_1x.png)'}}></div>
                <span className="dkjh">Roronoa Zoro</span>
              </div>
            </div>
            <div className="mimi_">
              <div className="sell_">
                <div className="top_">
                  <div className="icob">
                    <div className="frem">
                      <span className="icon ion-ios-box-outline"></span>
                    </div>
                  </div>
                  <div className="selling">
                    <span className="kodi">2,000</span>
                  </div>
                  <div className="icons">
                    <span className="icon ion-ios-more"></span>
                  </div>
                </div>
                <div className="bott_">
                  <div className="kl">
                    <p className="djlkj">LAST WEEK'S SALES <span className="pull-right djh">204</span></p>
                  </div>
                </div>
              </div>
              <div className="sell_ product">
                <div className="top_">
                  <div className="icob">
                    <div className="frem">
                      <span className="icon ion-ios-pricetags-outline"></span>
                    </div>
                  </div>
                  <div className="selling">
                    <span className="kodi">150</span>
                  </div>
                  <div className="icons">
                    <span className="icon ion-ios-more"></span>
                  </div>
                </div>
                <div className="bott_">
                  <div className="kl">
                    <p className="djlkj">LAST WEEK'S GOODS <span className="pull-right djh">19</span></p>
                  </div>
                </div>
              </div>
              <div className="sell_ order">
                <div className="top_">
                  <div className="icob">
                    <div className="frem">
                      <span className="icon ion-ios-download-outline"></span>
                    </div>
                  </div>
                  <div className="selling">
                    <span className="kodi">1,092</span>
                  </div>
                  <div className="icons">
                    <span className="icon ion-ios-more"></span>
                  </div>
                </div>
                <div className="bott_">
                  <div className="kl">
                    <p className="djlkj">LAST WEEK'S ORDER'S <span className="pull-right djh">189</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="mixiin_">
            <div className="order_recent">
              <div className="content_jk">
                <div className={classnames('satu_ _order_', { '_show_': '1' === this.state.active})}>
                  <div className="orewd">
                    <div className="lstii">
                      <div className="imfhlj" style={{backgroundImage: 'url(/images/dummy/dard_1x.jpg)'}}>
                        <div className="howr"></div>
                      </div>
                      <div className="foin">
                        <p className="dkeyu">sabun colek cap gajah wangi dan harum...</p>
                        <span className="diu">06.09.2017 12:07:12 PM</span>
                      </div>
                    </div>
                    <div className="lstii">
                      <div className="imfhlj" style={{backgroundImage: 'url(/images/dummy/pe_1x.jpg)'}}>
                        <div className="howr"></div>
                      </div>
                      <div className="foin">
                        <p className="dkeyu">pepsodon pasta gigi rasa mercon...</p>
                        <span className="diu">01.09.2017 10:07:12 AM</span>
                      </div>
                    </div>
                    <div className="lstii">
                      <div className="imfhlj" style={{backgroundImage: 'url(/images/dummy/ud_1x.png)'}}>
                        <div className="howr"></div>
                      </div>
                      <div className="foin">
                        <p className="dkeyu">lemper cak lontong dijamin nikmatzzz...</p>
                        <span className="diu">01.09.2017 10:07:12 AM</span>
                      </div>
                    </div>
                    <div className="lstii">
                      <div className="imfhlj" style={{backgroundImage: 'url(/images/dummy/tre_1x.jpg)'}}>
                        <div className="howr"></div>
                      </div>
                      <div className="foin">
                        <p className="dkeyu">sari roti, roti sari roti lejatzzz...</p>
                        <span className="diu">01.09.2017 10:07:12 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classnames('dua_ _announ_', { '_show_': '2' === this.state.active})}></div>
              </div>
              <div className="btiyo">
                <div className="jautret">
                  <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className={classnames('btn btn-default', { 'activel': '1' === this.state.active})}
                      onClick={this.btnActiveTab.bind(this, '1')}>
                      RECENT ORDER
                    </button>
                    <button type="button" className={classnames('btn btn-default', { 'activel': '2' === this.state.active})}
                      onClick={this.btnActiveTab.bind(this, '2')}>
                      ANNOUNCEMENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recentsld"></div>
          <div className="recentsld chart_">
            <div className="drak">
              <div className="timw">
                <div className="dkhuy">
                  <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default activel">
                      WEEK
                    </button>
                    <button type="button" className="btn btn-default">
                      MONTH
                    </button>
                    <button type="button" className="btn btn-default">
                      YEAR
                    </button>
                  </div>
                </div>
              </div>
              <div className="pop_">
                <div className="meni">
                  <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default activel">
                      REVENUE
                    </button>
                    <button type="button" className="btn btn-default">
                      SOLD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    )
  }
}

export default MyShop;

// 1.order
// 2.popular goods
// 3.balance
// 4.employe / partner
// 5.statistik
// 6.penjualan (day/week/month)
// 7.calendar with task
// 8.manage shop
// 9.message
