
const anotherFunction = () =>{
  // for (var i = 0; i < 10; i++) 
  //al hacerlo así el closure no funciona bien 
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000);
    
  }
}
anotherFunction()

