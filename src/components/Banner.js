import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <span id="avatar"><img src="https://avatars0.githubusercontent.com/u/3544" /></span>
      <h1 className="responsive-headline">I'm Gene Smith.</h1>
      <h3>
        I'm a seasoned marketing executive, experienced marketing technologist and a machine learning & blockchain enthusiast. Follow me. Contact me. Etc....
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
