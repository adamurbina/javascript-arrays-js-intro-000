var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, elem){
  newArray = [elem, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, elem){
  array = [elem, ...array]
  return array
}
