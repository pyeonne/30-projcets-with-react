import React from "react";

function ImageBox(props: { src: string }) {
  return (
    <div>
      <img className="image-box" src={props.src} alt="" />
    </div>
  );
}

export default ImageBox;
