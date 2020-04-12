node_xj = require("xls-to-json");
  node_xj({
    input: "shortfilms.xlsx",  // input xls
    output: "shortfilms.json", // output json
    sheet: "Sayfa1",  // specific sheetname
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });