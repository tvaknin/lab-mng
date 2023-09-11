import React from 'react';

const UtilityPage = () => {

     var buttonsNames = ["ping", "upgrade", "SSH connection", "disablePort", "enable port", "create Vlan"]
     return buttonsNames.map((name) => {
         return <button style={{color:'white', background:'green'}} mr-20 data-mdb-ripple-radius="25" type="button" class="btn btn-primary mr-2">{name}</button>
       ;})                 
}

function getDb() {

  const bla = [
    {
      "SSH connect": "",
      "Disable Port": "",
      "Enable Port": ""
    }]

  return bla
}

export default UtilityPage;