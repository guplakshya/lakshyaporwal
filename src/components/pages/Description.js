import React from "react";
import "./Description.css";

function Description(props) {
  return (
    <>
      <div className="common">
        <div className="description_item">
          <figure className="description_img_wrap">
            <img
              className="description_item_img"
              alt="des-img"
              src={props.src}
            />
          </figure>
          <div className="description_item_text">{props.text}</div>
          <div className="description_link">
            <a href={props.link} target="_blank" rel="noreferrer noopener">Project Link</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
