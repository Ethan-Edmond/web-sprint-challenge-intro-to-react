import React, { useState, useEffect }from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";

const AppContainer = styled.div`
  background-color: ${props => props.theme.color1};
  margin: 0;
  overflow: auto;
  color: ${props => props.theme.color3};
`;

const AppHeader = styled.h1`
  text-align: center;
  text-shadow: 1px 2px 2px ${props => props.theme.color2};
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  function pareChar({
    birth_year, eye_color, films, gender, hair_color,
    height, homeworld, mass, name, skin_color,
    species, starships, vehicles }){
    return {
      birth_year, eye_color, films, gender, hair_color,
      height, homeworld, mass, name, skin_color,
      species, starships, vehicles };
  }
  function pareData(data) {
    return data.map(char => {
      return pareChar(char);
    });
  };

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        setChars(pareData(res.data));
      })
      .catch(err => console.log("ERR:", err));
  }, []);

  function makeCharSetter(index){
    return (char) => {
      let newChars = [...chars];
      newChars.splice(index, 1, char);
      setChars(newChars);
    };
  }

  return (
    <AppContainer>
      <AppHeader>Characters</AppHeader>
      {
        chars.map((char, index) => {
          return <Character key={index} character={char} setChar={makeCharSetter(index)}/>;
        })
      }
    </AppContainer>
  );
};

export default App;
