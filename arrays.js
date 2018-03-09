var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, elem){
  var newArray = [elem, ...array]
  return newArray
}