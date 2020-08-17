import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class Gift extends Component {
  render() {
    return (
      <section id="gift">
        <div className="row">
          <h1>Gifts Vouchers</h1>
          <div className="gridcontainer">
            <div className="gridItem">
              <Flippy
                flipOnHover={true}
                flipOnClick={false}
                style={{ width: "100%" }}
              >
                <FrontSide animationDuration="900" className="voucher">
                  <div className="voucherLeft">
                    <h2>Happy Birthday Ayushi!</h2>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">MOMODOLL</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/v_momodoll.png"
                      className="button download"
                      download="momodoll.png"
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight"></div>
                </BackSide>
              </Flippy>
            </div>
            <div className="gridItem">
              <Flippy
                flipOnHover={true}
                flipOnClick={false}
                style={{ width: "100%" }}
              >
                <FrontSide animationDuration="900" className="voucher">
                  <div className="voucherLeft">
                    <h2>Happy Birthday Ayushi!</h2>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">MOMODOLL</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft"></div>
                  <div className="backvoucherRight"></div>
                </BackSide>
              </Flippy>
            </div>
            <div className="gridItem">
              <Flippy
                flipOnHover={true}
                flipOnClick={false}
                style={{ width: "100%" }}
              >
                <FrontSide animationDuration="900" className="voucher">
                  <div className="voucherLeft">
                    <h2>Happy Birthday Ayushi!</h2>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">MOMODOLL</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft"></div>
                  <div className="backvoucherRight"></div>
                </BackSide>
              </Flippy>
            </div>
            <div className="gridItem">
              <Flippy
                flipOnHover={true}
                flipOnClick={false}
                style={{ width: "100%" }}
              >
                <FrontSide animationDuration="900" className="voucher">
                  <div className="voucherLeft">
                    <h2>Happy Birthday Ayushi!</h2>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">MOMODOLL</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft"></div>
                  <div className="backvoucherRight"></div>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gift;
