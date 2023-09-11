import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { woHeader } from "./woHeader";


const DatatablePage = () => {
  const data = {
    columns: woHeader,
    rows: fetchData()
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

const fetchData = async () => {
  try {
    // Define the data to be sent in the POST request
    const postData = {
      // Your data here...
    };

    // Make a POST request to your API
    const response = await fetch('http://10.43.3.33:8080/restsql/res/devices?_output=json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

  } catch (error) {
    console.error('Error:', error);
  }
};

export default DatatablePage;