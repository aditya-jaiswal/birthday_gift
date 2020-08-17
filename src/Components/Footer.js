import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li key="facebook">
                <a href="https://www.facebook.com/iamadityajaiswal/">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li key="linkedin">
                <a href="https://www.linkedin.com/in/aditya--jaiswal">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li key="instagram">
                <a href="https://www.instagram.com/adit_jaiswal/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li key="github">
                <a href="https://github.com/aditya-jaiswal">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Aditya Jaiswal</li>
              <li>Design by Aditya</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
