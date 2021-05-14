// Write your Character component here
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid white;
  padding: 0px 10px 10px;
`;

const CharacterHeader = styled.h3`

`;

const CharacterText = styled.p`
  margin-left: 10px;
`;

const Films = styled.div`
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
      </CharacterText>
      <CharacterText>
        Eye color: {eye_color}
      </CharacterText>
      <Films>
        Films:
        {films.map(film => <CharacterText>{film}</CharacterText>)}
      </Films>
      <CharacterText>
        Gender: {gender}
      </CharacterText>
      <CharacterText>
        Hair color: {hair_color}
      </CharacterText>
      <CharacterText>
        Height: {height}
      </CharacterText>
      HomeWorld: {/* {TODO} */}
      <CharacterText>
        Mass: {mass}
      </CharacterText>
      <CharacterText>
        Skin color: {skin_color}
      </CharacterText>
        Species: {/* {TODO} */}
        Starships: {/* {TODO} */}
        Vehicles: {/* {TODO} */}
    </Container>
  );
};

export default Character;
