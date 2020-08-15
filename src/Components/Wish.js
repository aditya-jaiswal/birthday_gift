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
            <h2>About Me</h2>

            <p>
              {bio} hahahah again sample text to test. and i will be testing hpw
              it looks when the test size become hhuge and needs to be
              accomodated in more than a single line.{" "}
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
            <h2>About Me</h2>

            <p>
              {bio} hahahah again sample text to test. and i will be testing hpw
              it looks when the test size become hhuge and needs to be
              accomodated in more than a single line.{" "}
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
