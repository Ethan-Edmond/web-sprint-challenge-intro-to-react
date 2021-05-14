import React from "react";
import styled from "styled-components";

const PlanetContainer = styled.div`
  margin-left: 10px;
  Border: 1px solid ${props => props.theme.color2};
`;

const PlanetHeader = styled.h4`
  margin-left: 10px;
`;

const PlanetText = styled.p`
  margin-left: 20px;
`;

const HomeWorld = ({homeworld}) => {
  const {climate, diameter, gravity, name,
         orbital_period, population, rotation_period,
         surface_water, terrain} = homeworld;

  return (
    <PlanetContainer>
      <PlanetHeader>Homeworld: {name}</PlanetHeader>
      <PlanetText>Climate: {climate}</PlanetText>
      <PlanetText>Diameter: {diameter}</PlanetText>
      <PlanetText>Gravity: {gravity}</PlanetText>
      <PlanetText>Orbital Period: {orbital_period}</PlanetText>
      <PlanetText>Population: {population}</PlanetText>
      <PlanetText>Rotation Period: {rotation_period}</PlanetText>
      <PlanetText>Surface Water: {surface_water}</PlanetText>
      <PlanetText>Terrain: {terrain}</PlanetText>
    </PlanetContainer>
  );
};

export default HomeWorld;
