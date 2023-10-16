import React, { useState, useEffect } from "react";
import MenuIcon from "./Taskbar/MenuIcon";
import StatusIcon from "./Taskbar/StatusIcon";
import Clock from "./Taskbar/Clock";
import styled from "styled-components";
import StarIcon from "./Images/windows-icon/startIcon.png";
import MenuTheme from "./StartMenu/MenuTheme";

function TaskBar() {
  const [MenuState, setMenuState] = useState(false);
  const isStateMenuOpen = () => setMenuState(!MenuState);
  return (
    <>
      <Wrap>
        <MenuButton>
          <button type="button" onClick={isStateMenuOpen}>
            <img src={StarIcon} alt="start/icon" />
          </button>
        </MenuButton>
        <MenuIcon />
        <StatusIcon />
        <Clock />
      </Wrap>
      <StartMenu ifMenuActive={MenuState}>
        <MenuTheme />
      </StartMenu>
    </>
  );
}

const Wrap = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  backdrop-filter: blur(0.5rem);
  background-color: rgba(211, 233, 238, 0.5);
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: auto;
  justify-content: flex-end;
  /* justify-content: space-between; */
  flex-direction: row;

  button {
    outline: none;
    border: 4px solid transparent;
    background: transparent;
    padding: 0.55rem;
    margin: 0 0.05rem;
    opacity: 1;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(1rem);
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
      object-fit: contain;
      filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3));
      transition: all 500ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      position: relative;
      justify-content: space-between;
    }
  }
`;
const StartMenu = styled.div`
  position: absolute;
  left: 26vw;
  bottom: 8vh;
  opacity: 1;
  z-index: 2000;
  transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  opacity: ${(event) => (event.ifMenuActive ? "1" : "0")};
  visibility: ${(event) => (event.ifMenuActive ? "visible" : "hidden")};
  transform: ${event=> event.ifMenuActive?'translateY(0%)':'translate(100%)'};
`;

export default TaskBar;
