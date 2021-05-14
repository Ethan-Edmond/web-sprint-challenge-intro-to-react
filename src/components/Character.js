// Write your Character component here
import React from "react";
import styled from "styled-components";
import HomeWorld from "./HomeWorld";
import Species from "./Species";

const Container = styled.div`
  border: 2px solid white;
  padding: 0px 10px 10px;
`;

const CharacterHeader = styled.h3`

`;

const CharacterText = styled.p`
  margin-left: 10px;
`;

const Character = ({char, setChar, loadHomeWorlds, loadSpecies}) => {
  const {birth_year, eye_color, gender,
         hair_color, height, homeworld, mass,
         name, skin_color, species, starships, vehicles} = char;

  return(
    <Container>
      <CharacterHeader>{name}</CharacterHeader>
      <CharacterText>
        Birth year: {birth_year}
      </CharacterText>
      <CharacterText>
        Eye color: {eye_color}
      </CharacterText>
      <CharacterText>
        Gender: {gender}
      </CharacterText>
      <CharacterText>
        Hair color: {hair_color}
      </CharacterText>
      <CharacterText>
        Height: {height}
      </CharacterText>
      {(typeof homeworld === "string") ? <button onClick={e => loadHomeWorlds(char, setChar)}>Load Homeworlds</button>: <HomeWorld homeworld={homeworld}/>}
      <CharacterText>
        Mass: {mass}
      </CharacterText>
      <CharacterText>
        Skin color: {skin_color}
      </CharacterText>
      {
        species.length === 0 ?
          <h3>No Species Data</h3> :
        (species.some(specie => typeof specie === 'string') ?
          <button onClick={e => loadSpecies(char, setChar)}>Load Species</button> :
         <Species species={species}/>)
      }
      Starships: {/* {TODO} */}
        Vehicles: {/* {TODO} */}
    </Container>
  );
};

export default Character;
