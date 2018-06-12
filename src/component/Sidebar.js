import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Work/css/work.css';

const CurrentAnchor = function(): string {
  const url = window.location.href;
  return url.substring(url.indexOf("#")+1) || '';
}

// type Props = {
//   text: string,
//   anchor: string,
//   isActive: boolean,
//   index: number,
//   onClick: (index) => {}
// }
class SidebarItem extends Component {
  _getDisplayedIndex(index): string {
    return index < 10 ? `0${index}` : `${index}`;
  }
  render() {
    const {
      anchor,
      text,
      isActive,
      index,
      onClick,
    } = this.props;
    return (
      <div className="side-bar-item">
        <div className={`side-bar-index ${isActive ? 'active-index' : ''}`}>
          {this._getDisplayedIndex(index)}
        </div>
        <Link
          className={`side-bar-link ${isActive ? 'active-link' : ''}`}
          to={anchor}
          onClick={(e) => {
            if(!isActive) {
              onClick(index);
            } else {
              e.preventDefault();
              e.stopPropagation();
            }
          }}>
          {text}
        </Link>
      </div>
    );
  }
}

// type Props = {
//   title: string,
//   items: Array<{
//     text: string,
//     anchor: string,
//   }>
// }
export class Sidebar extends Component {
  constructor(props) {
    super(props);
    const initialIndex = props.items.findIndex(
      item => item.anchor === CurrentAnchor(),
    );
    this.state = {
      activeIndex: initialIndex < 0 ? 1 : initialIndex,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (): void => {
    const numSec = document.getElementsByClassName("content-block").length;
    for (let i = 1; i <= numSec; i ++) {
      const ele = document.getElementsByClassName("content-block")[i];
      if (ele && ele.getBoundingClientRect) {
        const anchor_offset = ele.getBoundingClientRect().top;
        if(anchor_offset > 100) {
          this.setState({activeIndex: i});
          return;
        }
      }
    }
  };

  render() {
    const renderedItems = this.props.items.map(
      (item, index) => {
        return <SidebarItem
          key={index}
          text={item.text}
          anchor={item.anchor}
          isActive={this.state.activeIndex === (index + 1)}
          index={index + 1}
          onClick={(clickedIndex) => {
            this.setState({activeIndex: clickedIndex});
          }}
        />;
      }
    );

    return (
      <div className="side-bar">
        <div className="side-bar-header">
          {this.props.title}
        </div>
        <div>
          {renderedItems}
        </div>
      </div>
    );
  }
}
