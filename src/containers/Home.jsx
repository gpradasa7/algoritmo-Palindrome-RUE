import React from "react";
import TablesList from "../components/TablesList";
import { DivContentStyled } from "../styles/ContentStyle";
import AddWord from "../components/AddWord";

const Home = ({ t, sT }) => {
  return (
    <>
      <DivContentStyled>
        <TablesList t={t} sT={sT} />
        <AddWord sT={sT} />
      </DivContentStyled>
    </>
  );
};

export default Home;
