// Write your Character component here
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid white;
  padding: 0px 10px;
`;

const CharacterHeader = styled.h3`

`;

const CharacterText = styled.p`
  margin-left: 10px;
`;

const Character = ({character}) => {
  const {birth_year, name} = character;

  console.log(character);
  return(
    <Container>
      <CharacterHeader>{name}</CharacterHeader>
      <CharacterText>
        BirthYear: {birth_year}
      </CharacterText>
    </Container>
  );
};

export default Character;
