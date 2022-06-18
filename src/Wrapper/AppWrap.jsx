<<<<<<< HEAD
import React from "react";
import SocialMedia from "../components/SocialMedia";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 Patrick</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
      </div>
    );
  };

=======
import React from "react";
import SocialMedia from "../components/SocialMedia";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 Patrick</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
      </div>
    );
  };

>>>>>>> a6e474b2306bb5af9cdbf466e4f260ea62e8664d
export default AppWrap;