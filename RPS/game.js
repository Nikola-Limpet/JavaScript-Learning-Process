// Write code below 💖

const choice = ['Rock', 'Paper', 'Scissors'] 

let computerOne= Math.random( 1 * 2);

let computerTwo = Math.random(1 * 2);

if(computerOne === computerTwo) {
  console.log(`
  Computer1 picked:  ${choice[computerOne]}
  Computer2 picked: ${choice[computerTwo]}
  Draw!🎉
  `
  )
}
else if (computerOne == 0) {
  if(computerTwo == 1) {
    console.log(`
    Computer1 picked:  ${choice[computerOne]}
    Computer2 picked: ${choice[computerTwo]}
    
    Computer2 won!🎉
    `
    )
  }
  else {
    console.log(`
    Computer1 picked:  ${choice[computerOne]}
    Computer2 picked: ${choice[computerTwo]}
    
    Computer1 won!🎉
    `
    )
  }
}
else if(computerOne === 1) {
  if(computerTwo == 0) {
    console.log(`
    Computer1 picked:  ${choice[computerOne]}
    Computer2 picked: ${choice[computerTwo]}
    
    Computer1 won!🎉
    `
    )
  }
  else {
    console.log(`
    Computer1 picked:  ${choice[computerOne]}
    Computer2 picked: ${choice[computerTwo]}
    
    Computer1 won!🎉
    `
    )
  }
}

