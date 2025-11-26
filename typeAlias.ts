type User = {
    id:number;
    name:{
        firstName: string;
        lastName: string;

    };
    gender: "male" | "female";
    contractNumber: string;
    address:{
        division:string;
        city:string;
    };
};

const user1: User={
      id: 123,
      name:{
        firstName:"joni",
        lastName:"mia",
      },
      gender:"male",
      contractNumber: "der324",
      address:{
        division:"Dhaka",
        city:"dhaka",
      }

}


// Type alias in function 

type addFunc = (num1:number , num2:number) => number

 const add : addFunc = (num1,num2) => num1 + num2
