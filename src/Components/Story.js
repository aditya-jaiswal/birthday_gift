import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import moment from "moment";

class Story extends Component {
  constructor(props) {
    super(props);
    const startDate = new Date("1998-08-18,00:00:00");
    const startTime = moment(startDate);
    this.startTime = startTime;
    const timeEnd = moment();
    const diff = timeEnd.diff(startTime);
    const diffDuration = moment.duration(diff);
    this.state = {
      year: diffDuration.years(),
      month: diffDuration.months(),
      days: diffDuration.days(),
      hours: diffDuration.hours(),
      minutes: diffDuration.minutes(),
      seconds: diffDuration.seconds(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    var timeEnd = moment();
    var diff = timeEnd.diff(this.startTime);
    var diffDuration = moment.duration(diff);
    this.setState({
      year: diffDuration.years(),
      month: diffDuration.months(),
      days: diffDuration.days(),
      hours: diffDuration.hours(),
      minutes: diffDuration.minutes(),
      seconds: diffDuration.seconds(),
    });
  }
  render() {
    return (
      <section id="story">
        <div className="row storyline">
          <h2>Story of my life</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={<p style={{ color: "#000", fontSize: "20px" }}>1998</p>}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                size: "20px",
                color: "#fff",
              }}
              // icon={<i className="fa fa-download"></i>}
            >
              <img src="images/ayu3.jpg" />
              <h3 className="vertical-timeline-element-title">
                When the angel was born.
              </h3>
              <p style={{ fontSize: "14px" }}>
                The date was 18/08/1998 when my angel came to this world.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={<p style={{ color: "#000", fontSize: "20px" }}>2003</p>}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={}
            >
              <img src="images/ayu4.jpg" />
              <h3 className="vertical-timeline-element-title">
                Caring from childhood
              </h3>
              <p style={{ fontSize: "14px" }}>Always a caring person</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={
                <p style={{ color: "#000", fontSize: "20px" }}>2003-2007</p>
              }
              iconStyle={{
                background: "rgb(33, 150, 243)",
                size: "20px",
                color: "#fff",
              }}
              // icon={<i className="fa fa-download"></i>}
            >
              <img src="images/ayu5.jpg" />
              <h3 className="vertical-timeline-element-title">
                Always a winner
              </h3>
              <p style={{ fontSize: "14px" }}>
                Always been in the competitive spirit
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={
                <p style={{ color: "#000", fontSize: "20px" }}>2011-2019</p>
              }
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={}
            >
              <img src="images/ayu6.jpg" />
              <h3 className="vertical-timeline-element-title">So Beautiful</h3>
              <p style={{ fontSize: "14px" }}>You were born cute and hot</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={<p style={{ color: "#000", fontSize: "20px" }}>May 2019</p>}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                size: "20px",
                color: "#fff",
              }}
              // icon={<i className="fa fa-download"></i>}
            >
              <img src="images/ayu7.png" />
              <h3 className="vertical-timeline-element-title">
                The first time I found you
              </h3>
              <p style={{ fontSize: "14px" }}>
                We sarted talking for the first time on this date.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={
                <p style={{ color: "#000", fontSize: "20px" }}>July 2019</p>
              }
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={}
            >
              <img src="images/ayu8.png" />
              <h3 className="vertical-timeline-element-title">
                And then it continued
              </h3>
              <p style={{ fontSize: "14px" }}>
                We moved to Whatsapp and it became intense since then.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={<p style={{ color: "#000", fontSize: "20px" }}>Oct 2019</p>}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                size: "20px",
                color: "#fff",
              }}
              // icon={<i className="fa fa-download"></i>}
            >
              <img src="images/ayu9.jpeg" />
              <h3 className="vertical-timeline-element-title">
                The day I proposed you.
              </h3>
              <p style={{ fontSize: "14px" }}>
                The date was 04/10/2019 when I proposed you. It was the same day
                when i kissed you for the first time.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={<p style={{ color: "#000", fontSize: "20px" }}>Oct 2019</p>}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={}
            >
              <img src="images/ayu10.jpeg" />
              <h3 className="vertical-timeline-element-title">
                The day you proposed me
              </h3>
              <p style={{ fontSize: "14px" }}>
                I never expected this. Thanks for always doing the unexpected
                for me.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={
                <p style={{ color: "#000", fontSize: "20px" }}>November 2019</p>
              }
              iconStyle={{
                background: "rgb(33, 150, 243)",
                size: "20px",
                color: "#fff",
              }}
              // icon={<i className="fa fa-download"></i>}
            >
              <img src="images/ayu11.jpg" />
              <h3 className="vertical-timeline-element-title">
                Fisrt month anniversary.
              </h3>
              <p style={{ fontSize: "14px" }}>
                Thanks for taking me to new places. I promise to keep you happy
                always.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={<p style={{ color: "#000", fontSize: "20px" }}>Nov 2019</p>}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={}
            >
              <img src="images/ayu12.jpeg" />
              <h3 className="vertical-timeline-element-title">
                When you became part of me
              </h3>
              <p style={{ fontSize: "14px" }}>
                You are a part of me my doll and everything I have.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={<p style={{ color: "#000", fontSize: "20px" }}>Nov 2019</p>}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                size: "20px",
                color: "#fff",
              }}
              // icon={<i className="fa fa-download"></i>}
            >
              <img src="images/ayu13.jpg" />
              <h3 className="vertical-timeline-element-title">Meet Tamasha</h3>
              <p style={{ fontSize: "14px" }}>
                Even though she is no more. A very thoughtful gift
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={<p style={{ color: "#000", fontSize: "20px" }}>Nov 2019</p>}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={}
            >
              <img src="images/ayu14.jpg" />
              <h3 className="vertical-timeline-element-title">
                Two Masterchefs
              </h3>
              <p style={{ fontSize: "14px" }}>
                Such a beautiful date it was. It was just us and pingu. BTW
                pingu had the whole bed to himself
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={<p style={{ color: "#000", fontSize: "20px" }}>Feb 2020</p>}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                size: "20px",
                color: "#fff",
              }}
              // icon={<i className="fa fa-download"></i>}
            >
              <img src="images/ayu15.jpg" />
              <h3 className="vertical-timeline-element-title">
                Our First Valentine
              </h3>
              <p style={{ fontSize: "14px" }}>
                Thank you for making my first valentine day celebration so
                special for me. I love you a lot.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={
                <p style={{ color: "#000", fontSize: "20px" }}>
                  Mar 2020 - Present
                </p>
              }
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={}
            >
              <img src="images/ayu16.jpg" />
              <h3 className="vertical-timeline-element-title">
                Drunk and lovely people
              </h3>
              <p style={{ fontSize: "14px" }}>
                We are perfect for each other. We are the best couple. I love
                us. I love you.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="counter">
          <h2>Live long and prosper </h2>
          <div className="container">
            <div id="years">
              <img src="images/counter-love.png" />
              <h1>{this.state.year}</h1>
              <h3>Years</h3>
            </div>
            <div id="months">
              <img src="images/counter-love2.png" />
              <h1>{this.state.month}</h1>
              <h3>Months</h3>
            </div>
            <div id="days">
              <img src="images/counter-love.png" />
              <h1>{this.state.days}</h1>
              <h3>Days</h3>
            </div>
            <div id="hours">
              <img src="images/counter-love2.png" />
              <h1>{this.state.hours}</h1>
              <h3>Hours</h3>
            </div>
            <div id="minutes">
              <img src="images/counter-love.png" />
              <h1>{this.state.minutes}</h1>
              <h3>Minutes</h3>
            </div>
            <div id="seconds">
              <img src="images/counter-love2.png" />
              <h1>{this.state.seconds}</h1>
              <h3>Seconds</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Story;
