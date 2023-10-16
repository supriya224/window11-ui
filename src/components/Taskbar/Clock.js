import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const [TimeState, setTimeState] = useState();
  const [DateState, setDateState] = useState();

  useEffect(() => {
    setInterval(() => {
      const timeStamp = new Date();
      setTimeState(timeStamp.toLocaleTimeString());
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const DateStamp = new Date();
      setDateState(DateStamp.toLocaleDateString());
    }, 1000);
  }, []);
  return (
    <>
      <WindowClock>
        <div>{TimeState}</div>
        <div>{DateState}</div>
      </WindowClock>
    </>
  );
}
const WindowClock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 15vw;
  margin-left: 3rem;

  div {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    flex-direction:column;
    margin: 0.3vh 0;
  }
`;
export default Clock;
