import React from "react";
import styled from "styled-components";

const Species = ({species}) => {

  if (species.length === 0){
    return <h4>No known species</h4>;
  } else {
    return (species.some(specie => typeof specie === "string")) ? <h4>BBBB</h4> : <h4>AAA</h4>;
  }
};

export default Species;
