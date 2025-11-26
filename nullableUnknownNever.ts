const getUser = (input : string | null ) =>{
    if(input){
        console.log("akta user dao");

    } else {
        console.log("sobgula user dao")
    }
} 

getUser(null)



const discountCalculator = (input : unknown) =>{
      if(typeof input === "number"){
        const discountPrice = input*0.1;
        console.log(discountPrice)
      }
      else if (typeof input === "string"){
        const [discountPrice] = input.split(" ")
        console.log(Number(discountPrice) * 0.1)
      } 
      else {
        console.log("Wrong input")
      }
}

discountCalculator(100)
discountCalculator("100 tk")
discountCalculator(null)




// never 
const throwError = (msg: string):never =>{

    throw new Error(msg)
}

throwError("Error ... ")