/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("getting-started")}>Getting Started</a>
            <a href={this.docUrl("hacker-news-example")}>Examples</a>
            {/* <a href={this.docUrl("hacker-news-example")}>Changelog</a> */}
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://twitter.com/FlutterStarter"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            {/* <a
              href="https://stackoverflow.com/questions/tagged/futter"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a> */}
            <a
              href="https://discord.gg/cARywNajQe"
              target="_blank"
              rel="noreferrer noopener"
            >
              Discord
            </a>
          
          </div>
          <div>
            <h5>More</h5>
            <a
              target="_blank"
              href="https://github.com/GeekyAnts/flutter-starter-kit"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            <a
              target="_blank"
              href="https://github.com/GeekyAnts/flutter-starter/blob/master/CONTRIBUTING.md"
              rel="noreferrer noopener"
            >
              Contribution Guidelines
            </a>
         
            <br></br>
            <a
              className="github-button"
              href="https://github.com/GeekyAnts/flutter-starter-kit"
              data-icon="octicon-star"
              data-count-href="https://github.com/GeekyAnts/flutter-starter-kit"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Stars
            </a>
          </div>
          <div>
            <a
              href="https://geekyants.com/?utm_source=flutterstarter&utm_medium=header&utm_campaign=flutterstarter"
              target="_blank"
              rel="noreferrer noopener"
            >
              Built with&nbsp;❤️&nbsp; at GeekyAnts.
            </a>
          </div>
        </section>
        <section
          className="copyright"
          style={{ marginBottom: "20px" }}
        ></section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
