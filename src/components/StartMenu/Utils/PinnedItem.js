import React from "react";
import styled from "styled-components";
import { PinAPIOne, PinAPIThree, PinAPITwo } from "../../API/API";

export const PinnedItem = () => {
  return (
    <>
      <Title>
        <div>
          <h4>Recommended Items</h4>
          <button type="button">
            All Apps<span> &#8250;</span>
          </button>
        </div>
      </Title>
      <Wrap>
        <nav>
          {PinAPIOne &&
            PinAPIOne.map((value, index) => (
              <div key={index}>
                <img src={value.pIcon} alt="pinned/icon" />
                <p>{value.text}</p>
              </div>
            ))}
        </nav>

        {/* second  */}

        <nav>
          {PinAPITwo &&
            PinAPITwo.map((value, index) => (
              <div key={index}>
                <img src={value.pIcon} alt="pinned/icon" />
                <p>{value.text}</p>
              </div>
            ))}
        </nav>

        {/* third */}

        <nav>
          {PinAPIThree &&
           PinAPIThree.map((value, index) => (
              <div key={index}>
                <img src={value.pIcon} alt="pinned/icon" />
                <p>{value.text}</p>
              </div>
            ))}
        </nav>
      </Wrap>
    </>
  );
};



const Wrap = styled.div`
  nav {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    div {
      width: 5.5rem;
      height: 5.5rem;
      margin: 0.1vh 0;
      transition: all 250ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      &:hover {
        outline: none;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        filter: brightness(1);
        box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.2);
      }
      img {
        width: 2.5rem;
        height: 2.3rem;
        object-fit: contain;
        filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1));
      }
      p {
        font-size: 0.85rem;
        font-weight: 400;
        margin-top: 1vh;
      }
    }
  }
`;


const Title = styled.div`
  padding: 0 2rem;
  margin: 1vh 0 3vh 0;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      color: #000;
      font-weight: 500;
      line-height: 1.08;
      letter-spacing: 0.5px;
    }

    button {
      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(0.1rem);
      box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.7);
      padding: 0.5rem 0.7rem;
      border-radius: 0.245rem;
    }
  }
`;
