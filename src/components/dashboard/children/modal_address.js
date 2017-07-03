import React, { Component } from 'react';

class ModalAddress extends Component {

  constructor(props) {
    super(props);
    this.getRegencyChange = this.getRegencyChange.bind(this)
    this.getDistrictChange = this.getDistrictChange.bind(this)
  }

  getRegencyChange(e) {
    this.props.getRegency(e.target.value)
  }

  getDistrictChange(e) {
    this.props.getDistrict(e.target.value)
  }

  render() {

    let thisProvs = (
      this.props.provinces.provinces.map((prop, id) => {
        return (
          <option key={id} value={prop.code}>{ prop.name }</option>
        )
      })
    )

    let thisRegency = (
      this.props.regencies.regencies.map((reg, id) => {
        return (
          <option key={id} value={reg.code}>{ reg.name }</option>
        )
      })
    )

    let thisDistrict = (
      this.props.districts.districts.map((dist, id) => {
        return (
          <option key={id} value={dist.code}>{ dist.name }</option>
        )
      })
    )

    return (
      <div className="modal fade kor" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">New Address</h4>
            </div>
            <div className="modal-body">
              <div className="body-content">
                <form className="form-add">
                  <div className="form-group">
                    <span className="identifier">identifier</span>
                    <div className="rvi">
                      <input type="text" name="identifier" className="form-control" spellCheck="false"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="receiver">receiver</span>
                    <div className="rvi">
                      <input type="text" name="receiver" className="form-control" spellCheck="false"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="phone">phone</span>
                    <div className="rvi">
                      <input type="text" name="phone" className="form-control" spellCheck="false"/>
                    </div>
                  </div>
                  <div className="col-md-4 prov">
                    <div className="form-group">
                      <span className="province">province</span>
                      <div className="rvi">
                        <select name="province" className="form-control" onChange={this.getRegencyChange}>
                          <option value="choose_default">Choose Province</option>
                          { thisProvs }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 rege">
                    <div className="form-group">
                      <span className="regencies">regencies</span>
                      <div className="rvi">
                        <select name="regencies" className="form-control" onChange={ this.getDistrictChange}>
                          <option value="choose_default">Choose Regency</option>
                          { thisRegency }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 dist">
                    <div className="form-group">
                      <span className="district">district</span>
                      <div className="rvi">
                        <select name="district" className="form-control">
                          <option value="choose_default">Choose District</option>
                          { thisDistrict }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <span className="address">address</span>
                    <div className="rvi">
                      <textarea name="address" className="form-control posy" spellCheck="false"></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary bry">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalAddress;
