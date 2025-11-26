// Array , Object
//tuple

//1
let bazarList: string[] = ["egg" , "milk", "banana", "alu"]

    bazarList.push(123)


 //2  
 let mixArray:(string | number)[] = ["egg",4 , "milk",1, "banana",4, "alu",2]  

    mixArray.push(true)


//3(tuple) 
let nameRoll: (string| number | boolean)[] = ["Alif" , 32 , true]   



//object type 
const user : {
    organization:"Programming Hero";   //? Literal type 
    readonly education: string;    //? access modifier     
    firstName: string;
    middleName?: string;      //? optional type
    lastName: string;
    isMarried: true;
} = {
    organization:"Programming Hero",
    education: "Eight",
    firstName: "Alif",
     middleName: "Sarker",
    lastName: "Rony",
    isMarried: true
};