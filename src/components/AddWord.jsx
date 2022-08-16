import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import Palindromes from "../helpers/Palindromes";
import { postData } from "../helpers/postData";

export const apiKey =
  "https://crudcrud.com/api/552e8eddccfc4484af723ed912dab989";

const AddWord = ({ sT }) => {
  const [values, setValues] = useState({
    text: "",
  });
  const [valid, setValid] = useState(true);

  const handleChange = ({ target }) =>
    setValues({
      ...values,
      [target.name]: target.value,
    });

  const handleClick = values => {
    if (values.text !== "") {
      setValid(true);
      Palindromes(values);
      postData(values);
      sT(getData());
    } else {
      setValid(false);
    }
  };

  return (
    <div style={{ width: "45%" }}>
      <h3>Agregar Palabras</h3>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          marginTop: "3rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          name="text"
          id="outlined-multiline-flexible"
          label="Ingrese una palabra o texto"
          multiline
          rows={4}
        />
        <Button onClick={() => handleClick(values)} variant="contained">
          VALIDAR
        </Button>
        {Palindromes(values) ? (
          <Alert severity="success">¡El texto es Palindrome!</Alert>
        ) : (
          <Alert severity="error">¡El texto no es Palindrome!</Alert>
        )}
        {valid === true ? (
          ""
        ) : (
          <Alert severity="error">¡Porfavor llena todos los campos!</Alert>
        )}
        {/* <Button variant="contained">Editar</Button> */}
      </Box>
    </div>
  );
};

export default AddWord;
