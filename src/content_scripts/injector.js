var otl = otl || {};

otl.injector = function() {
  function _row(rowIndex) {
    // consistency is for losers
    return [3, 4, 5, 6, 7].map(function(colIndex) {
      return $("#A2" + colIndex + rowIndex + "N1display");
    }).concat([0, 1, 2, 3, 4, 5, 6].map(function(colIndex) {
      return $("#B21_" + rowIndex + "_" + colIndex);
    }));
  }

  function _tableHasEnoughRowsFor(data) {
    return $("#A23" + data.length + "N1display").length > 0;
  }

  function populateRow(rowIndex, data) {
    var $row = _row(rowIndex);
    for(var colIndex = 0; colIndex < data.length; colIndex += 1) {
      $row[colIndex].val(data[colIndex]);
    }
  }

  function populateTable(data) {
    if(_tableHasEnoughRowsFor(data)) {
      data.forEach(function(rowData, i, arr) {
        populateRow(i + 1, rowData);
      });
    }
  }

  return {
    populateRow: populateRow,
    populateTable: populateTable
  };
};
