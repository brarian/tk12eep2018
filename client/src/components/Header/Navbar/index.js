import React, { Component } from 'react';
import ListenButton from '../ListenButton';
import EpisodeSearch from '../EpisodeSearch';
import SubscribeList from '../SubscribeList';
import AboutButton from '../AboutButton';
import Tagline from '../Tagline';
import SocialList from '../SocialList';
import AboutList from '../AboutList';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navListenActive: false,
      navAboutActive: false
    }
  }

  render() {
    return (
      <nav className="nav-primary-container">
        <div onMouseEnter={() => this.setState({navListenActive: true})}
          onMouseLeave={() => this.setState({navListenActive: false})}
          className={
            this.state.navListenActive                                          //This ternary expression will toggle classes
            ?                                                                   //depending on whether the nav section is hovered
            "nav-item-active nav-listen nav-item-container"
            :
            this.state.navAboutActive
            ?
            "nav-item-minimized nav-listen nav-item-container"
            :
            "nav-listen nav-item-container"}
          id="nav-listen">
          <ListenButton />
          <div className="submenu">
            <EpisodeSearch />
            <SubscribeList />
          </div>
        </div>
        <div onMouseEnter={() => this.setState({navAboutActive: true})}
              onMouseLeave={() => this.setState({navAboutActive: false})}
              className={
                this.state.navAboutActive                                       //This ternary expression will toggle classes
                ?                                                               //depending on whether the nav section is hovered
                "nav-item-active nav-about nav-item-container"
                :
                this.state.navListenActive
                ?
                "nav-item-minimized nav-about nav-item-container"
                :
                "nav-about nav-item-container"}
              id="nav-about">
          <AboutButton />
          <div className="submenu">
            <Tagline />
            <SocialList />
            <AboutList />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
