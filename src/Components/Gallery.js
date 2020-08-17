import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.images = [
      {
        original: "images/gallery/1.jpg",
        originalAlt: "1",
        thumbnail: "images/gallery/1.jpg",
        description: "First Trip Together",
      },
      {
        original: "images/gallery/2.jpg",
        originalAlt: "2",
        thumbnail: "images/gallery/2.jpg",
        description: "@colorful_emotions",
      },
      {
        original: "images/gallery/3.jpg",
        originalAlt: "3",
        thumbnail: "images/gallery/3.jpg",
        description: "Alone in the theatre",
      },
      {
        original: "images/gallery/4.jpg",
        originalAlt: "4",
        thumbnail: "images/gallery/4.jpg",
        description: "Happy Mouse",
      },
      {
        original: "images/gallery/5.jpg",
        originalAlt: "5",
        thumbnail: "images/gallery/5.jpg",
        description: "Cranky Mouse",
      },
      {
        original: "images/gallery/6.jpg",
        originalAlt: "6",
        thumbnail: "images/gallery/6.jpg",
        description: "Cooking Together",
      },
      {
        original: "images/gallery/7.jpg",
        originalAlt: "7",
        thumbnail: "images/gallery/7.jpg",
        description: "Amazing Night Together",
      },
      {
        original: "images/gallery/8.jpg",
        originalAlt: "8",
        thumbnail: "images/gallery/8.jpg",
        description: "Cutest Couple",
      },
      {
        original: "images/gallery/9.jpg",
        originalAlt: "9",
        thumbnail: "images/gallery/9.jpg",
        description: "Doll with a doll",
      },
      {
        original: "images/gallery/10.jpg",
        originalAlt: "10",
        thumbnail: "images/gallery/10.jpg",
        description: "A memory that will last",
      },
      {
        original: "images/gallery/11.jpg",
        originalAlt: "11",
        thumbnail: "images/gallery/11.jpg",
        description: "My doll, My princess",
      },
      {
        original: "images/gallery/12.jpg",
        originalAlt: "12",
        thumbnail: "images/gallery/12.png",
        description: "My desi girl",
      },
      {
        original: "images/gallery/13.jpg",
        originalAlt: "13",
        thumbnail: "images/gallery/13.jpg",
        description: "My cute girl",
      },
      {
        original: "images/gallery/14.jpg",
        originalAlt: "14",
        thumbnail: "images/gallery/14.jpeg",
        description: "Tripping",
      },
      {
        original: "images/gallery/15.jpg",
        originalAlt: "15",
        thumbnail: "images/gallery/15.jpg",
        description: "Do Phool",
      },
      {
        original: "images/gallery/16.jpg",
        originalAlt: "16",
        thumbnail: "images/gallery/16.jpg",
        description: "My cane",
      },
      {
        original: "images/gallery/17.jpg",
        originalAlt: "17",
        thumbnail: "images/gallery/17.jpg",
        description: "Naughty bacha",
      },
      {
        original: "images/gallery/18.jpg",
        originalAlt: "18",
        thumbnail: "images/gallery/18.jpg",
        description: "Mousie",
      },
      {
        original: "images/gallery/19.jpg",
        originalAlt: "19",
        thumbnail: "images/gallery/19.jpg",
        description: "Best valentines days",
      },
      {
        original: "images/gallery/20.jpg",
        originalAlt: "20",
        thumbnail: "images/gallery/20.jpg",
        description: "Do Pagal",
      },
      {
        original: "images/gallery/21.jpg",
        originalAlt: "21",
        thumbnail: "images/gallery/21.jpg",
        description: "With my love",
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
