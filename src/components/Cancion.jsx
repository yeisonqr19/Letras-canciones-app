import React from "react";
import styled from "@emotion/styled";

const P = styled.p`
  padding: 10px;
  color: white;
  background-color: rgb(246, 105, 76);
  text-transform: uppercase;
  font-size: 17px;
  text-align: center;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Cancion = ({ letra }) => {
  if (letra === "") return null;
  return (
    <>
      <h2>Letra de la Cancion</h2>
      {letra === undefined ? (
        <P>No se Encontro la Cancion</P>
      ) : (
        <p className="letra">{letra}</p>
      )}
    </>
  );
};
