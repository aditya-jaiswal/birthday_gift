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
                    <div className="gifttext">
                      You are entitled to a gift of Unicorn soft toy from
                      Hamleys
                    </div>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">MOMODOLL</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher and read the
                      terms and condition carefully
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/momodoll.png"
                      className="button download"
                      download
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight">
                    <h4>Terms and conditions</h4>
                    <ul>
                      <li>
                        This voucher must be redeemed by sending a digital copy
                        to Aditya
                      </li>
                      <li>
                        To claim the gift mentioned in the voucher you must say
                        "I love you" to Aditya and kiss him passionately
                      </li>
                      <li>This voucher can only be redeemed once</li>
                      <li>This offer is only valid until 17/08/2021</li>
                    </ul>
                  </div>
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
                    <div className="gifttext">
                      You can call me at your place 5 times and I won’t deny and
                      come to you irrespective of what I am doing or what time
                      it is. Use it wisely.
                    </div>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">MOUSE KA BURROW</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher and read the
                      terms and condition carefully
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/mousekaburrow.png"
                      className="button download"
                      download
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight">
                    <h4>Terms and conditions</h4>
                    <ul>
                      <li>
                        This voucher must be redeemed by sending a digital copy
                        to Aditya
                      </li>
                      <li>
                        If after coming to your place you offer him sex then
                        that visit will be reimbursed
                      </li>
                      <li>
                        The number of visits remaining will increase by half for
                        every time we have sex
                      </li>
                      <li>
                        This voucher can be used for a maximum of 1
                        international and 1 national visits
                      </li>
                      <li>
                        Offer not valid for days when either of us has an
                        important event scheduled
                      </li>
                      <li>This offer is only valid until 17/08/2021</li>
                    </ul>
                  </div>
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
                    <div className="gifttext">
                      You are entitled to a trip to any place you want with you
                      love Aditya. You have full rights to choose the
                      destination, the mode of transport, the activities we will
                      be participating in, etc.{" "}
                    </div>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">DOLA EXPLORER</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher and read the
                      terms and condition carefully
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/dolaexplorer.png"
                      className="button download"
                      download
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight">
                    <h4>Terms and conditions</h4>
                    <ul>
                      <li>
                        This voucher must be redeemed by sending a digital copy
                        to Aditya
                      </li>
                      <li>
                        To claim the gift mentioned in the voucher you must
                        prepare a nice full course meal for Aditya
                      </li>

                      <li>This voucher can only be redeemed once</li>
                      <li>This offer is only valid until 17/08/2021</li>
                    </ul>
                  </div>
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
                    <div className="gifttext">
                      You are entitled to be lazy for an entire day and ask
                      Aditya to do everything for you. You sit back and enjoy
                    </div>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">LAZY TOTO</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher and read the
                      terms and condition carefully
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/lazytoto.png"
                      className="button download"
                      download
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight">
                    <h4>Terms and conditions</h4>
                    <ul>
                      <li>
                        This voucher must be redeemed by sending a digital copy
                        to Aditya
                      </li>
                      <li>
                        To claim the gift mentioned in the voucher you must say
                        "I love you" to Aditya and kiss him passionately
                      </li>
                      <li>This voucher can only be redeemed once</li>
                      <li>This offer is only valid until 17/08/2021</li>
                    </ul>
                  </div>
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
                    <div className="gifttext">
                      You are entitled to go for a fine dining date with Adi to
                      any Fine-dine and wine restaurant.
                    </div>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">DINE WITH TOM</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher and read the
                      terms and condition carefully
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/dinewithtom.png"
                      className="button download"
                      download
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight">
                    <h4>Terms and conditions</h4>
                    <ul>
                      <li>
                        This voucher must be redeemed by sending a digital copy
                        to Aditya
                      </li>
                      <li>
                        To claim the gift mentioned in the voucher you must
                        drink 4 litres of water for 10 days continuously.
                      </li>
                      <li>This voucher can only be redeemed once</li>
                      <li>This offer is only valid until 17/08/2021</li>
                    </ul>
                  </div>
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
                    <div className="gifttext">
                      You are entitled to witness one of the most amazing guitar
                      performance by a bf for his girl friend. If willing you
                      can also get free hands on session for learning guitar.
                    </div>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">GUITAR SESSION</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher and read the
                      terms and condition carefully
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/guitarsession.png"
                      className="button download"
                      download
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight">
                    <h4>Terms and conditions</h4>
                    <ul>
                      <li>
                        This voucher must be redeemed by sending a digital copy
                        to Aditya
                      </li>
                      <li>
                        To claim the gift mentioned in the voucher you must
                        workout with Aditya for 5 workout sessions
                      </li>
                      <li>This voucher can only be redeemed twice</li>
                      <li>This offer is only valid until 17/08/2021</li>
                    </ul>
                  </div>
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
                    <div className="gifttext">
                      You are entitled for 4 full body massage sessions with
                      proper ambiance, candles, music and sensual touch of Adi's
                      hand.
                    </div>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">MASSAGE</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher and read the
                      terms and condition carefully
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/massage.png"
                      className="button download"
                      download
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight">
                    <h4>Terms and conditions</h4>
                    <ul>
                      <li>
                        This voucher must be redeemed by sending a digital copy
                        to Aditya
                      </li>
                      <li>
                        To claim the gift mentioned in the voucher you must
                        please Mr. Lollipop. If you are really tired and just
                        want to relax then the mentioned condition is not
                        mandatory.
                      </li>
                      <li>This voucher can only be redeemed 4 times.</li>
                      <li>This offer is only valid until 17/08/2021</li>
                    </ul>
                  </div>
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
                    <div className="gifttext">
                      You are entitled for 2 strip dance session from Aditya.
                      You are allowed to choose the costume and the music.
                    </div>
                  </div>
                  <div className="voucherRight">
                    <h3>Happy Birthday</h3>
                    <div className="code">
                      <div className="codeheader">Voucher Code</div>
                      <div className="spcode">STRIP DANCE</div>
                    </div>
                    <div className="codeps">
                      Please flip over to download the voucher and read the
                      terms and condition carefully
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration="900" className="voucher">
                  <div className="backvoucherLeft">
                    <a
                      href="images/stripdance.png"
                      className="button download"
                      download
                    >
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <div className="backvoucherRight">
                    <h4>Terms and conditions</h4>
                    <ul>
                      <li>
                        This voucher must be redeemed by sending a digital copy
                        to Aditya
                      </li>
                      <li>
                        This voucher is currently locked and can only be enabled
                        by giving a lap dance to Adi.
                      </li>
                      <li>
                        To claim the gift mentioned in the voucher you must
                        first enable it and then have 5 shots of any alcoholic
                        drink you like.
                      </li>
                      <li>
                        This voucher can only be redeemed twice after enabling
                        it.
                      </li>
                      <li>This offer is only valid until 17/08/2021</li>
                    </ul>
                  </div>
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
