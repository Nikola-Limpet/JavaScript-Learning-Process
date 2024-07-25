
function copyArrManipulate(arr, instruction) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(instruction(arr[i]))
  }
};

function multiBy2(input) { return input *  2};

const result = copyArrManipulate([1,2,3], multiBy2);