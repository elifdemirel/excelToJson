node_xj = require("xls-to-json");
  node_xj({
    input: "input.xlsx",
    output: "output.json",
    sheet: "sheetname",
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });