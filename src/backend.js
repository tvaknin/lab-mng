const { Connection, Request } = require("tedious");
var result = [];


// Create connection to database
const config = {
  authentication: {
    type: "default",
    options: {
      userName: "creamy", 
      password: "Singtel12345",
      port: "1433"
    },
  },
  server: "labelling.database.windows.net", // update me
  options: { //update me
    encrypt: true,
    port: 1433,
    enableArithAbort: true,
    database: "Labeler"
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT TOP 2 
    WOQUERY.nameWO,
    WOQUERY.commissionDate,
    WOQUERY.serviceType,
    WOQUERY.serviceNo,
    WODETAILS.circuitRoutine,
    WODETAILS.aEnd,
    WODETAILS.bEnd
    FROM WOQUERY
    INNER JOIN WODETAILS
    ON (WOQUERY.id = WODETAILS.id)`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

 
  
  request.on('row', function(columns) {
    let val = {}
    columns.forEach(function(column) {
      val[column.metadata.colName] = column.value;
    });
    result.push(val); 
    const fs = require('fs');
    
    fs.writeFileSync('woInfo.json', JSON.stringify(result));
    console.log(result);
  });

  connection.execSql(request);
}