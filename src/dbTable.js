import React, { useState, useEffect } from 'react';
import "./styles.css";
import { MDBDataTable } from 'mdbreact';
import { woHeader } from "./woHeader";

const DatatablePage = () => {

  const [users, setUsers] = useState([])
  var dataj

  const fetchDevs = async () => {
    try {
      const response = await fetch('http://localhost:8080/restsql/res/devices?_output=json', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('EROL  Network response was not ok UPDATED ONE' + response.status);
      }
      dataj = await response.json();
      const userDatae = {
        columns: woHeader,
        rows: dataj['devicess'],
      };

      // Convert boolean values to text
      userDatae.rows.forEach((row) => {
        row.loanable = row.loanable ? 'Yes' : 'No';
      });

      setUsers(userDatae);
    } catch (error) {
      console.error('EROL Error got!!!', dataj);
    }
  }
  useEffect(() => {
    fetchDevs();
  }, []);

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={users}
    />
  );
}

export default DatatablePage;