var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, elem){
  var newArray = [elem, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, elem){
  array.unshift(elem);
  return array;
}

function addElementToEndOfArray(array, elem){
  var newArray = [...array, elem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, elem){
  array.push(elem);
  return array;
}
