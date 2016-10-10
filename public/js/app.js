// use iife and hit tabe to generate the "function bundle to start"
(function() {

  // var numberOfRows = 15; //number of rows in grid
  // var numberOfCols = 15; // number of columns
  var canvas = $('#canvas'); // my placement area - think of paper in drawing

  makeGrid(15,15); //putting rows and cols as input parameters makes it so they have to be passed in
  clearGrid();
  makeGrid(30,30);
    $('.cell').on('click', changeColor);

  function clearGrid(){
    canvas.empty();
  }
  function changeColor(event){
    // just this cells background
    $(this).toggleClass('red');
  }

  function makeGrid(numberOfRows,numberOfCols){
    // let's make some ros and put them in the body
    for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1){
      var row = $('<tr></tr>');
      for(var colCount =0; colCount < numberOfCols; colCount += 1){
        var column = $('<td></td>');
        column.addClass('cell');
        row.append(column);
      }
      canvas.append(row);
    }
  }

}());
