import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="common">
        <div className="contact">
          <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Contact Info</div>
                <div className="info-text">
                  LAKSHYA PORWAL<br></br>
                  VIT University<br></br>
                  <a href="mailto:guplakshya@gmail.com">guplakshya@gmail.com</a>
                </div>
              </div>
              <div className="column right">
                <div className="text">Social Media</div>
                <section className="social-media">
                  <div className="social-media-wrap">
                    <div className="social-icons">
                      <a
                        className="social-icon-link linkedin"
                        href="https://linkedin.com/in/lakshya-porwal"
                      >
                        <i class="fab fa-linkedin" />
                      </a>
                      <a
                        className="social-icon-link github"
                        href="https://github.com/guplakshya"
                      >
                        <i class="fab fa-github" />
                      </a>
                      <a
                        className="social-icon-link instagram"
                        href="https://www.instagram.com/lakshya_p_"
                      >
                        <i class="fab fa-instagram" />
                      </a>
                      <a
                        className="social-icon-link twitter"
                        href="https://twitter.com/"
                      >
                        <i class="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
