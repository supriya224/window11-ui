import React from "react";
import styled from "styled-components";
import Video from "./Images/video.webm";
import bg from "./Images/windows-bg-light.jpg";

function Desktop() {
  return (
    <>
      <Background>
        <video autoPlay={true} loop={true} muted={true} playsInline={true}>
          <source src={Video} />
        </video>
      </Background>
    </>
  );
}

const Background = styled.main`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
  opacity: 1;
  z-index: 1500;
  overflow: hidden;

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
    pointer-events:none;
  }
`;

export default Desktop;
