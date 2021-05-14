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

const Character = ({character, setChar}) => {
  const {birth_year, eye_color, films, gender,
         hair_color, height, homeworld, mass,
         name, skin_color, species, starships, vehicles} = character;


  return(
    <Container>
      <CharacterHeader>{name}</CharacterHeader>
      <CharacterText>
        Birth year: {birth_year}
        Eye color: {eye_color}
        Films: {/* {TODO} */}
        Gender: {gender}
        Hair color: {hair_color}
        Height: {height}
        HomeWorld: {/* {TODO} */}
        Mass: {mass}
        Skin color: {skin_color}
        Species: {/* {TODO} */}
        Starships: {/* {TODO} */}
        Vehicles: {/* {TODO} */}
      </CharacterText>
    </Container>
  );
};

export default Character;
