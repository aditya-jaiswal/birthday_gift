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
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={<p style={{ fontSize: "25px" }}>2011 - present</p>}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                size: "30px",
                color: "#fff",
              }}
              icon={<i className="fa fa-download"></i>}
            >
              <img src="images/ayu2.jpg" />
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //   icon={}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="counter">
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
