import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("If you are interested in my profile, please feel free to reach out to me at 📩 nguyenph.work@gmail.com")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Thank you!!! ❤️❤️❤️")}
        </p>
      </div>
    </Fade>
  );
}
