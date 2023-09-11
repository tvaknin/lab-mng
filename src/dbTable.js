import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { woInfo } from "./woInfo.js";
import { woHeader } from "./woHeader";


const DatatablePage = () => {
  const data = {
    columns: woHeader,
    rows: getDb()
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

function getDb() {

  const bla = [
    {
      "DeviceID": 1,
      "IP_Address": "192.168.1.100",
      "Platform": "HP",
      "CAS IP": "192.168.1.211",
      "Switch IP": "192.168.1.1",
      "DeviceType": "PSX",
      "Hardware (other name)": "Appliance",
      "ASI Cards": 4,
      "Rack": 36,
      "Location": "Keshet lab",
      "Description": "Main server",
      "Owner": "John Doe",
      "UsedBy": "John Doe",
      "LastUsed": "2023-09-04",
      "Loanable": "No"
    }]

  return bla
}

export default DatatablePage;