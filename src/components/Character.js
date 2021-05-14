// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = ({character}) => {
  const {birth_year, name} = character;

  return(
    <>
      <h1>{name}</h1>
      <p>
        BirthYear: {birth_year}
      </p>
    </>
  );
};

export default Character;
