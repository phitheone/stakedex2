import React from "react";
import { ImNewTab } from "react-icons/im";
import { IconContext } from "react-icons";

const home = () => {
  return (
    <div className="HContainer">
      <a href="/#/dapp" target="_blank">
        <IconContext.Provider value={{ color: "white", size: "1.8em" }}>
          <button className="DappBtn">
            <p>Launch App</p>
            <ImNewTab />
          </button>
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default home;
