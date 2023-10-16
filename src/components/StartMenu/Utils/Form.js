import React from "react";
import styled from "styled-components";

export const Form = () => {
  return (
    <>
      <FormSearch>
        <input
          type="text"
          name="search"
          placeholder="Type here to search"
          autoComplete="off"
          aria-label="windows-search-form"
        />
      </FormSearch>
    </>
  );
};

const FormSearch = styled.form`
  display: inline-block;
  margin-top: 2rem;
  margin-bottom:2vh;
  width: 100%;
 
  input {
    width: 90%;
    opacity: 1;
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(0.1rem);
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
    border-bottom: 0.15rem solid #0099ff;
    padding: 0.65rem 1rem;
    border-radius: 0.245rem;
    font-size: 0.85rem;
    color: #0099ff;
  }
`;
