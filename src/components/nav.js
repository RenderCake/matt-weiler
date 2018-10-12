import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import styled, { css } from "react-emotion";

const open = css`
  transform: rotate(90deg);
`;

class Nav extends Component {
  state = {
    mobileNavOpen: false
  };

  handleMobileNavOpen = e => {
    this.setState(os => ({ mobileNavOpen: !os.mobileNavOpen }));
  };

  render() {
    return (
      <nav
        css={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between"
        }}
      >
        <svg
          width="50"
          height="19"
          viewBox="0 0 50 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="19"
            width="19"
            height="5"
            transform="rotate(-90 0 19)"
            fill="black"
          />
          <rect
            x="18"
            y="19"
            width="19"
            height="5"
            transform="rotate(-90 18 19)"
            fill="black"
          />
          <rect
            x="9"
            y="11"
            width="11"
            height="5"
            transform="rotate(-90 9 11)"
            fill="black"
          />
          <rect
            x="50"
            width="19"
            height="5"
            transform="rotate(90 50 0)"
            fill="black"
          />
          <rect
            x="32"
            width="19"
            height="5"
            transform="rotate(90 32 0)"
            fill="black"
          />
          <rect
            x="41"
            y="8"
            width="11"
            height="5"
            transform="rotate(90 41 8)"
            fill="black"
          />
        </svg>

        <p css={{ margin: 0, color: "#EC4646" }}>Matt Weiler</p>

        <div>
          <FaBars
            css={{
              transform: "rotate(0deg)",
              transition: "transform 0.3s ease-in-out"
            }}
            className={this.state.mobileNavOpen && open}
            onClick={this.handleMobileNavOpen}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
