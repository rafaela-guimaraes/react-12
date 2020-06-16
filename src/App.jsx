import React from "react";

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import Contacts from "./components/Contacts/Contacts";

import "./App.scss";
import Filters from "./components/Filters/Filters";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="topbar">
          <div className="container">
            <a href="/" className="topbar__logo">
              <LogoSvg alt="Logo Instagram" />
            </a>
          </div>
        </header>

        <div className="container">
          <Filters />
        </div>

        <div className="container">
          <Contacts />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
