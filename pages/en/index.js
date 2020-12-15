/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = (props) => (
      <div
        style={{
          textAlign: "left",
          color: "white",
          width: "100%",
          marginBottom: "20px",
          padding: "0px 10px",
        }}
      >
        <h2 className="projectTitle">
          {props.title}
          <small>{props.tagline}</small>
        </h2>
      </div>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div
            className="pluginRowBlock"
            style={{
              justifyContent: "start",
              padding: "0px 10px",
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner" style={{ marginTop: "50px" }}>
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button className="docs-btn" href={docUrl("getting-started.html")}>
              Get Started
            </Button>
          </PromoSection>
        </div>
        <div style={{ paddingBottom: "20px" }}></div>
        {/* Code Snippet was here */}
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;
    const timelineData = [
      {
        text: "Alpha Launch  🎉",
        date: "December 10 2020",
        category: {
          tag: "Feature",
          color: "#018f69",
        },
      },
    ];

    const IntroVideo = () => (
      <div style={{ 
        paddingTop: "20px",
        }}>
        <div className="mainVideo">
          <h2
            style={{
              marginTop:"50px",
              textAlign: "center",
              marginBottom: "0px",
              fontSize: "28px",
            }}
          >
            Flutter Starter Demo
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "35px 20px",
            }}
          >
            <img src="/img/flutter_starter_kit.gif" height="600" />
          </div>
        </div>

        <div className="custom_row" style={{
          paddingTop:"60px", 
          paddingBottom:"30px",
      }}>
          <h2
            style={{
              marginTop:"0px",
              textAlign: "center",
              marginBottom: "0px",
              fontSize: "28px",
              paddingBottom:"20px",
            }}
          >
            Flutter Starter Examples
          </h2>
          <div className="wrapper homeWrapper">
            <div
              className="column_list"
              style={{
                textAlign: "center",
                paddingLeft: "10%",
                paddingRight: "10%",
              }}
            >
              <div>
                <h3>Hacker News</h3>
                <img src="/img/hacker_news.gif" height="600" />
              </div>

              <div>
                <h3>Weather App</h3>
                <img src="/img/weather-app.gif" height="600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    //This is for change log section use it on next release
    // const TimelineItem = ({ data }) => (
    //   <div className="timeline-item">
    //     <div className="timeline-item-content">
    //       <span className="tag" style={{ background: data.category.color }}>
    //         {data.category.tag}
    //       </span>
    //       <time>{data.date}</time>
    //       <p>{data.text}</p>

    //       <span className="circle" />
    //     </div>
    //   </div>
    // );
    // const Timeline = () =>
    //   timelineData.length > 0 && (
    //     <div>
    //       <h2 style={{ textAlign: "center", marginBottom: "0px" }}>
    //         Changelog
    //       </h2>
    //       <div className="timeline-container">
    //         {timelineData.map((data, idx) => (
    //           <TimelineItem data={data} key={idx} />
    //         ))}
    //       </div>
    //     </div>
    //   );
    const Backlinks = (props) => (
      <div className="wrapper homeWrapper">
        <h1 id="moreProjectsHeading">More Projects</h1>
        <br></br>
        <div>
          <div className="backlink">
            <div>
              <h2>
                <span>
                  <a
                    href="https://flutterlearn.com/?utm_source=flutterstarter&utm_medium=website&utm_campaign=flutterstarter"
                    target="_blank"
                  >
                    <img src="/img/fl-logo.png"></img>
                    Flutter Learn
                  </a>
                </span>
              </h2>
              <p>
                The coursework at FlutterLearn is built on a critical learning
                curve that focuses on real-life application of concepts, rather
                than reciting what the books say!
              </p>
            </div>
          </div>
          <div className="backlink">
            <div>
              <h2>
                <span>
                  <a
                    href="https://fluttermarket.com/?utm_source=flutterstarter&utm_medium=website&utm_campaign=flutterstarter"
                    target="_blank"
                  >
                    <img src="/img/fm-logo.png"></img>
                    Flutter Market
                  </a>
                </span>
              </h2>
              <p>A market place for Responsive Flutter Templates & Themes.</p>
            </div>
          </div>
        </div>
      </div>
    );
    const Features = () => (
      <div className="custom_row">
        <div className="wrapper homeWrapper">
          <div className="column_list">
            <div>
              <img src="/img/coding.png" height="100px"></img>
              <h2>Production Ready Apps</h2>
              <p>
                Flutter Starter helps you build production ready apps super
                fast! Handle everything from state-management to API calls at
                one place so you don't have to rewrite code.
              </p>
            </div>

            <div>
              <img src="/img/mobile.png" height="100px"></img>
              <h2>Easy to Use</h2>
              <p>
                Our top-notch documentation is at your disposal. You can set up
                your files and start coding in no time.
              </p>
            </div>

            <div>
              <img src="/img/mobile-app.png" height="100px"></img>
              <h2>Example Apps</h2>
              <p>
                We have two perfect example apps for your reference. They
                demonstrate what this kit is all about and how you can connect
                everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features className="alignCenter" />
          <IntroVideo />
          {/* <Timeline /> */}
          <Backlinks />
        </div>
      </div>
    );
  }
}

module.exports = Index;
