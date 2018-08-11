import React, { Component } from 'react';
import '../App.css';
import {SNSIcon} from '../component';
import { HashRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
  componentDidMount() {
    window.scroll({top:0});
  }

  _renderArrow() {
    return (
      <div className="view-case">
        <div className="view-case-description">View case</div>
        <div className="view-case-arrow"></div>
        <div className="view-case-arrow-head"></div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="profile">
          <div className="Hi-Im-Yun">
            <h1><span>
              <img className="quote" src="image/desktop/quote.svg"/>
            </span>{"Hi I'm Yun"}</h1>
          </div>
          <div className="UI-designer-Be">A visual & UX designer who designs visually and logically,<br/> currently located in Bay Area, CA.</div>
        </div>
        <SNSIcon/>
         
        <div className="project-section project-palmdrive-section">
          <Link to="/work/palmdrive">
            <div className="img-block" style={{backgroundImage: `url("home/pd/bg-pd.png")`}}>
            </div>
            <div className="device-block">
              <img className="project-image palmdrive-home" src="home/pd/palmdrive@2x.png"/>
            </div>
            <div className="text-block">
              <div className="project-title">Palmdrive</div>
              <div className="project-description">Official website of Palmdrive</div>
              <span className="label">Website</span>
              <span className="label">Information Architecture</span>
              <span className="label">Iconography</span>
              {this._renderArrow()}
            </div>
          </Link>
        </div>
        <div className="project-section project-fruito-section">
          <Link to="/work/fruito">
            <div className="text-block">
              <div className="project-title">Fruito</div>
              <div className="project-description">A self-published iOS fruits management app</div>
              <span className="label">Mobile App</span>
              <span className="label">Product Design</span>
              <span className="label">Interaction Design</span>
              {this._renderArrow()}
            </div>
            <div className="img-block" style={{backgroundImage: `url("home/fruito/bg-fruito.png")`}}>
            </div>
            <div className="device-block">
              <img className="project-image palmdrive-home" src="home/fruito/fruito-1@2x.png"/>
              <img className="project-image palmdrive-home" src="home/fruito/fruito-2@2x.png"/>
            </div>
          </Link>
        </div>
        <div className="project-section project-new-year-section">
          <Link to="/work/newyear">
            <div className="img-block" style={{backgroundImage: `url("home/nye/bg-nye.png")`}}>
            </div>
            <div className="device-block">
              <img className="project-image newyear-home" src="home/nye/hnymobile@2x.png"/>
              <img className="project-image newyear-home" src="home/nye/hnyweb@2x.png"/>
            </div>
            <div className="text-block">
              <div className="project-title">New Year Event</div>
              <div className="project-description">A branding event of Palmdrive</div>
              <span className="label">Graphic Design</span>
              <span className="label">Website</span>
              <span className="label">Marketing</span>
              {this._renderArrow()}
            </div>
          </Link>
        </div>
        <div className="project-section project-pefin-section">
          <Link to="/work/transaction">
            <div className="text-block">
              <div className="project-title">Pefin</div>
              <div className="project-description">Transaction management design for a web-based financial software</div>
              <span className="label">Website</span>
              <span className="label">Data Visualization</span>
              {this._renderArrow()}
            </div>
            <div className="img-block" style={{backgroundImage: `url("home/pefin/bg-pefin.png")`}}>
            </div>
            <div className="device-block">
              <img className="project-image transaction-home" src="home/pefin/pefin-1@2x.png"/>
              <img className="project-image transaction-home" src="home/pefin/pefin-2@2x.png"/>
            </div>
          </Link>
        </div>
        <div className="project-section">
          <Link to="/work/graphic">
            <div className="img-block" >
              <img className="background-cloud" src="svg/pinkcloud.svg"/>
              <div className="graphic-label">2013-present</div>
            </div>
            <div className="text-block graphic-text">
              <div className="project-title">Other Work and Experience</div>
              <div className="project-description">A showcase of some other projects I worked on and shipped from 2013 till now</div>
              <span className="label">Graphic Design</span>
              <span className="label">Branding</span>
              <span className="label">Passion Project</span>
              {this._renderArrow()}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}