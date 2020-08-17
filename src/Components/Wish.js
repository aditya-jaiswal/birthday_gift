import React, { Component } from "react";
import { GlassMagnifier } from "react-image-magnifiers";

class Wish extends Component {
  render() {
    var profilepic = "images/" + "wordcloud-124.png";
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="wish">
        <div className="wordwish">
          <div className="wish-text column">
            <h2>Happy birthday!</h2>

            <p>
              {bio} Wish you a very happy birthday Ayushi. You are the best
              person that I have come across my life. Birthday is a very special
              day of all of us because it reminds us of what we bring to this
              world by our birth. I will tell you. You bring happiness,
              prosperity, brightness to this World. You bring happiness,
              brightness, love, humility, childhood, and companionship to me.
              Thanks for coming into this World and thanks for coming into my
              life. I wish you a year full of success and love. I wish that you
              be the greatest gf of all time :P. I wish you a lot of happiness
              and promise that I will be with you always.{" "}
            </p>
          </div>
          <div className="wish-photo column">
            <img
              style={{ maxHeight: "90vh", width: "100%" }}
              src="images/ayu1.jpg"
              alt="ayu1"
            />
          </div>
        </div>
        <div className="banner">
          <GlassMagnifier
            className="banner-photo column"
            imageSrc={profilepic}
            imageAlt="myushi_wordcloud"
            allowOverflow={true}
            magnifierSize={"50%"}
            magnifierBorderSize={5}
            magnifierBorderColor={"rgba(255, 255, 255, .5)"}
          />
          <div className="banner-wish column main-col">
            <h2>Wordcloud</h2>

            <p>
              {bio} This Wordcloud comprises of words from our WhatsApp chat
              history. Just like this Wordcloud we are also comprised of
              different emotions that all come together to form the love that we
              have for each other. There were around 3000 words which we used
              regularly. I ranked these words/phrases based on their frequency
              and then handpicked around 600 words/phrases and made this
              Wordcloud. Let’s see if you can get the reference of all these
              words. Download it and take up the challenge.{" "}
            </p>
            <div className="download">
              <p>
                <a
                  href={profilepic}
                  className="button"
                  download="myushi_wordcloud.png"
                >
                  <i className="fa fa-download"></i> Download Wordcloud
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Wish;
