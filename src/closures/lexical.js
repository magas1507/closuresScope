const buildCount = (i) =>{
  let count = i;
  const displayCount = () =>{
    console.log(count++)
  }
  return displayCount
}

const mycount = buildCount(1)
mycount()
mycount()
mycount()

const myOthercount = buildCount(10)
myOthercount()
myOthercount()