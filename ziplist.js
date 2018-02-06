const testOne = ['a', 'b', 'c'];
const testTwo = [1, 2, 3,];

function zipList(arrayOne, arrayTwo) {
  const zippedList = [];
  for (let count = 0; count < arrayOne.length; count++) {
    zippedList[2 * count] = arrayOne[count];
    zippedList[(2 * count) + 1] = arrayTwo[count];
  }
  return zippedList;
}

console.log(zipList(testOne, testTwo));

function zipListTheSimpleWay(arrayOne, arrayTwo) {
  const nestedList = _.zip(arrayOne, arrayTwo);
  return _.union(_.flatten(nestedList));
}

console.log(zipListTheSimpleWay(testOne, testTwo));