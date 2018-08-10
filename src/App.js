import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header, Footer, SNSIcon, Home} from './component';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {About, Work, Palmdrive, GraphicDesign,Transaction,Resume,Fruito} from './component';
import createHashHistory from 'history/createBrowserHistory'
const history = createHashHistory();

window.history.scrollRestoration = 'manual';
class ScrollTopTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplay: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll);
    this._handleScroll();
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this._handleScroll);
  }

  _handleScroll = (): void => {
    if (window.pageYOffset > 200 && !this.state.shouldDisplay) {
      this.setState({shouldDisplay: true});
    } else if (window.pageYOffset <= 200 && this.state.shouldDisplay) {
      this.setState({shouldDisplay: false});
    }
  };

  _handleClick = (): void => {
    window.scroll({top:0, behavior: 'smooth'});
    setTimeout(
      () => this.setState({shouldDisplay: false}),
      100,
    );
  };

  render() {
    return (
      <div
        onClick={this._handleClick}
        className={`scroll-to-top-root ${this.state.shouldDisplay ? '' : 'hidden_elem'}`}>
        <div className="scroll-to-top-background"/>
        <img
          className="project-img-long"
          src='image/desktop/up-1@2x.png'
        />
      </div>
    );
  }
}

const App = ({history}) => (
  <div>
    <Router location={history}>
      <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/resume/" component={Resume} />
        <Route path="/work/newyear/" component={Work}/>
        <Route path="/work/palmdrive/" component={Palmdrive} />
        <Route path="/work/graphic/" component={GraphicDesign} />
        <Route path="/work/transaction/" component={Transaction} />
        <Route path="/work/fruito/" component={Fruito} />
        <ScrollTopTop/>
        <Footer/>
      </div>
    </Router>
  </div>
);

export default App;
