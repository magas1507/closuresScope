const moneyBox =(coins) =>{
  var saveCoins = 0;

  saveCoins += coins
  console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

const moneyBox = () =>{
  var saveCoins = 0
  const countCoins = (coins) =>{
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins;
}

let myMoneyBox= moneyBox()

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)

// otro ejemplo 

const papa = (nuevoEngendro) =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3