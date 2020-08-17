import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.images = [
      {
        original: "images/ayu1.jpg",
        originalAlt: "Ayushi",
        thumbnail: "images/ayu1.jpg",
      },
      {
        original: "images/ayu2.jpg",
        originalAlt: "Ayushi",
        thumbnail: "images/ayu2.jpg",
      },
    ];
  }

  render() {
    return (
      <section id="gallery">
        <div className=" media">
          <h2>Photo Album</h2>
          <h3>Memorable moment</h3>
          <ImageGallery
            items={this.images}
            autoPlay={true}
            showBullets={true}
            showPlayButton={false}
            showFullscreenButton={false}
            thumbnailPosition="left"
            slideOnThumbnailOver={true}
            additionalClass="app-image-gallery"
          />
        </div>
      </section>
    );
  }
}

export default Gallery;
