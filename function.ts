// Normal function , Arrow Function

function addNumber(num1:number , num2:number) : number {
    return num1 + num2;
}

addNumber(33,6)

// Arrow function 
 const subNumber = (num1:number,num2:number) : number => num1 + num2;
       
 subNumber(65,4)



 // object + function => method
 
 const poorUser = {
      name:"Alif",
      balance: 45,
      addBalance(value : number){
         const totalBalance = this.balance + value;
         return totalBalance
      }
 }
 poorUser.addBalance(26758)


 // Loop + function 

 const arr: number[] =  [1,2,3,4,5 ]

 const sqrArray = arr.map((elem : number): number => elem*elem );