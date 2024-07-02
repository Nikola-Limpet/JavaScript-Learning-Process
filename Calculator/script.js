// TODO: implement a calculator
// 1. The calculator should be able to perform addition, subtraction, multiplication, and division
// 2. The calculator should be able to display the result
// 3. The calculator should be able to clear the display
// 4. The calculator should be able to handle decimal numbers
// 5. The calculator should be able to handle negative numbers
// 6. The calculator should be able to handle keyboard input

let buffer = '0';
const screen = document.querySelector('.screen-display');

function buttonClick(value) {
  // handle number and symbol
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(number) {
  if (buffer === '0') {
    buffer = number
  } else {
    buffer += number
  }
}

function handleSymbol(number) {
  switch(number) {
    case 'C':
      buffer = '0';
      break;
    case '=':
      if (buffer === '0') {
        break;
      } 
      else if (buffer.includes('x')) {
        buffer = eval(buffer.replace('x', '*'));
        break;
      }
      else {
        buffer = eval(buffer);
      }
      break;
    case '🔙': 
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    default:
      buffer += number;
  } 
}

function init() {
    document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(event) {
      buttonClick(event.target.innerText);
    });
    });
}
// function init() {
//   let buttons = documentory.querySelectorAll('.button');
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function(event) {
//     buttonClick(event.target.innerText);
//     });
//   }
// }
  
function rerender() {
  screen.innerText = buffer;
}

init();