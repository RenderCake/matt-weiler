import React from "react";
import { FaBars } from "react-icons/fa";
import { css } from "emotion";

const Nav = () => (
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
      <FaBars />
    </div>
  </nav>
);

export default Nav;
