import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData } from "../helpers/getData";
import { H3TableList, TableStyled } from "../styles/ContentStyle";
import { apiKey } from "./AddWord";
import Palindromes from "../helpers/Palindromes";

const TablesList = ({ t, sT }) => {
  const deleteT = ({ target }) => {
    fetch(`${apiKey}/palindrome/${target.id}`, {
      method: "DELETE",
    }).then(async () => {
      const data = await getData();
      sT(data);
    });
  };

  return (
    <div style={{ width: "60%" }}>
      <H3TableList>Lista de Palabras Palindromas</H3TableList>
      <TableStyled borderless={true} bordered hover size="sm">
        <tbody>
          {t?.map((word, i) => (
            <tr key={i}>
              <td
                style={{
                  maxInlineSize: "300px",
                  maxWidth: "295px",
                }}
              >
                <div> {word.text}</div>
              </td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: ".5rem",
                }}
              >
                <Button id={word._id} onClick={deleteT} variant="danger">
                  Borrar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </div>
  );
};

export default TablesList;
