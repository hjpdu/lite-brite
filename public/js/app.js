// use iife and hit tab to generate the "function bundle to start"
// set a global value for the color of cells
var currentCellColor = ('#66ccff');
//pass the picker value back into that currentCellColor value
function update(picker) {
currentCellColor = '#' + picker.toString();
}
(function() {
  var canvas = $('#canvas'); // my placement area - think of paper in drawing
  var updateGridButton = $('#update-grid-button');
  var numberOfColsInput = $('#number-of-cols');
  var numberofRowsInput = $('#number-of-rows');
  var errorBox = $('#error-box');
  var colorPicker = $('#color-picker');
  var cell = ('.cell');

  makeGrid(25,50); //putting rows and cols as input parameters makes it so they have to be passed in
  // for each click of a element containing the cell id, run the updateCellColor
  // cell.css('background-color', black);
  $('.cell').on('click', updateCellColor);
  updateGridButton.on('click', updateGridSize);
  errorBox.hide();


  // on click of color picker button push color into the changeColorFunction
  function updateCellColor(){
    //update the css background-color of whatever element's event caused this function to run
    $(this).css('background-color', currentCellColor);
    $('h1').css('color',currentCellColor);
    $('#main-bar').css('background-color',currentCellColor);
  }

  function updateGridSize(){

    clearGrid(); //remove current grid
    //grab number of columns from the input for the new grid
    var newColNumber = parseInt(numberOfColsInput.val());
    //grab number rows from the input for the new grid
    var newRowNumber = parseInt(numberofRowsInput.val());
    //make new grid based on new rows and columns values
    if(newRowNumber <= 51 && newColNumber <= 51) {
      makeGrid(newRowNumber , newColNumber);
      errorBox.hide();
    }else {
      makeGrid(25,50);
      errorBox.show();
    }
    $('.cell').on('click', updateCellColor);
  }

  function clearGrid(){
    canvas.empty();
  }
  // function changeColor(event){
  //   // just this cells background
  //   $(this).toggleClass('.red');
  // }

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
