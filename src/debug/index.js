var a = "hello";

function hello() {
  let b = 'hello world';
  let c = 'hello world!';
  if (true) {
    let d = 'hello world!!';
    debugger
  }
}

hello()

const moneyBox = () =>{
  debugger
  var saveCoins = 0
  const countCoins = (coins) =>{
    debugger
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins;
}

let myMoneyBox= moneyBox()

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)