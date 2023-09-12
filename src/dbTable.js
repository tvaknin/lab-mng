import React, { useState, useEffect } from 'react';
import "./styles.css";
import { MDBDataTable } from 'mdbreact';
import { woHeader } from "./woHeader";

const DatatablePage = () => {

  const eee = [
    {
      "DeviceID": 1,
      "IP_Address": "ERROR",
      "Platform": "ERROR",
      "CAS IP": "ERROR",
      "Switch IP": "ERROR",
      "DeviceType": "ERROR",
      "Hardware (other name)": "ERROR",
      "ASI Cards": 4,
      "Rack": 36,
      "Location": "ERROR",
      "Description": "ERROR",
      "Owner": "ERROR",
      "UsedBy": "ERROR",
      "LastUsed": "2023-09-04",
      "Loanable": "No"
    }]

  const data = {
    columns: woHeader,
    rows: eee
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;