import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header, Footer, Navbar} from './component';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import {About, Work, Palmdrive, GraphicDesign,Transaction,Resume} from './component';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/resume/" component={Resume} />
      <Route path="/work/newyear/" component={Work} />
      <Route path="/work/palmdrive/" component={Palmdrive} />
      <Route path="/work/graphic/" component={GraphicDesign} />
      <Route path="/work/transaction/" component={Transaction} />
    </div>
  </Router>
);

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="profile">
          <div className="Hi-Im-Yun">
            <h1><span>
              <img className="quote" src="svg/quote.svg"/>
            </span>{"Hi I'm Yun"} </h1>
          </div>
          <div className="UI-designer-Be">A UX/UI designer. Believe in relationships with people. Think with writing and sketch. Learn by making stuff. Currently located in Bay Area, CA.</div>
        </div>
        <div className="sns-section">
          <img className="sns-icon" src="svg/linkedin.svg" href=""/>
          <img className="sns-icon" src="svg/dribbble.svg" href=""/>
          <img className="sns-icon" src="svg/medium.svg" href=""/>
          <img className="sns-icon" src="svg/ins.svg" href=""/>
        </div>
        {/*<div className="project-section">
                  <div className="img-block" src={logo}>
                  </div>
                  <div className="text-block">
                    Fruits Management App1
                  </div>
                </div>*/}
        <div className="project-section project-new-year-section">
          <div className="img-block">
            <img className="background-cloud" src="svg/bluecloud.svg"/>
            <img className="project-image" src="home/group-2/group-2.png"/>

          </div>
          <div className="text-block">
            <div className="project-title">New Year Event Sprint</div>
            <div className="project-description">A branding event from scratch to the end in 2 weeks</div>
            <div className="view-case">view case</div>
          </div>
        </div>
        <div className="project-section project-palmdrive-section">
          <div className="img-block" src={logo}>
            <img className="background-cloud green-cloud" src="svg/greencloud.svg"/>
            <img className="project-image" src="home/group/group@3x.png"/>
          </div>
          <div className="text-block">
            <div className="project-title">Palmdrive Website</div>
            <div className="project-description">Official website of Palmdrive</div>
            <div className="view-case">view case</div>
          </div>
        </div>
        <div className="project-section">
          <div className="img-block">
            <img className="background-cloud purple-cloud" src="svg/purplecloud.svg"/>
            <img className="project-image" src="home/group-3/group-3@3x.png"/>
          </div>
          <div className="text-block">
            <div className="project-title">Transaction Management Design</div>
            <div className="project-description">Transaction Management is one of the five core functions of Pefin, a web-based financial tool</div>
            <div className="view-case">view case</div>
          </div>
        </div>
        <div className="project-section">
          <div className="img-block" src={logo}>
            <img className="background-cloud" src="svg/pinkcloud.svg"/>
            <div >2013-present</div>
          </div>
          <div className="text-block">
            <div className="project-title">Graphic Design Collection +</div>
            <div className="project-description">A showcase of some other projects I worked on and shipped from 2013 till now</div>
            <div className="view-case">view case</div>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
