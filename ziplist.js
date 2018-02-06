const testOne = ['a', 'b', 'c'];
const testTwo = [1, 2, 3];

function zipList(arrayOne, arrayTwo) {
  const zipArray = [];
  for (let count = 0; count < arrayOne.length; count++) {
    zipArray[2 * count] = arrayOne[count];
    zipArray[(2 * count) + 1] = arrayTwo[count];
  }
  return zipArray;
}

console.log(zipList(testOne, testTwo));

function zipListTheSimpleWay(arrayOne, arrayTwo) {
  const nestedArrays = _.zip(arrayOne, arrayTwo);
  return _.union(_.flatten(nestedArrays));
}

console.log(zipListTheSimpleWay(testOne, testTwo));
