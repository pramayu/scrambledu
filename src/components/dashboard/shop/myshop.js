import React, { Component } from 'react';
import DashNav from '../../../shared/dashboardnav';

class MyShop extends Component {
  render() {
    console.log(this.props.location.query)
    return (
      <div>
        <DashNav caption="Main Shop's" childcap="Selling the best goods you have"/>
        <div className="content_dash">
          <div className="maximo_">
            <div className="info_reward_balance">

            </div>
            <div className="task_">

            </div>
            <div className="four_en">

            </div>
            <div className="mimi_">
              <div className="sell_">
                <div className="top_"></div>
                <div className="bott_"></div>
              </div>
              <div className="sell_ product">
                <div className="top_"></div>
                <div className="bott_"></div>
              </div>
              <div className="sell_ order">
                <div className="top_"></div>
                <div className="bott_"></div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="mixiin_">
            <div className="order_recent">

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
