import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    var name = "Happy Birthday Doll";
    var description =
      "This is a random text to test the fonts and styles and color. might have to change it later";
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;

      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <ParticlesBg type="polygon" num={12} bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#wish">
                Wish
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#story">
                Story
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#gift">
                Gift
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3 className="responsive-headline">{description}.</h3>
            <img style={{ maxWidth: "20%" }} src="images/cake.svg" />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#wish">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
