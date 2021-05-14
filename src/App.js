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

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        setChars(res.data);
      })
      .catch(err => console.log("ERR:", err));
  }, []);

  return (
    <AppContainer>
      <h1 className="Header">Characters</h1>
      {
        chars.map((char, index) => {
          return <Character key={index} character={char}/>;
        })
      }
    </AppContainer>
  );
};

export default App;
