// use iife and hit tabe to generate the "function bundle to start"
(function() {

  var canvas = $('#canvas'); // my placement area - think of paper in drawing
  var updateGridButton = $('#update-grid-button');
  var numberOfColsInput = $('#number-of-cols');
  var numberofRowsInput = $('#number-of-rows');

  makeGrid(15,15); //putting rows and cols as input parameters makes it so they have to be passed in
  $('.cell').on('click', changeColor);
  updateGridButton.on('click', updateGridSize);
  // clearGrid();
  // makeGrid(30,30);

  function valHandler(){
   {
      updateGridButton.attr('disabled', true);
    }
  }
  function updateGridSize(){
    clearGrid(); //remove current grid
    //grab number of columns from the input for the new grid
    var newColNumber = parseInt(numberOfColsInput.val());
    //grab number rows from the input for the new grid
    var newRowNumber = parseInt(numberofRowsInput.val());
    //make new grid based on new rows and columns values
    if(newRowNumber <= 30 && newColNumber <= 30) {
      makeGrid(newRowNumber , newColNumber);
    }else{
      makeGrid(15,15);
    }
    $('.cell').on('click', changeColor);
  }

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
