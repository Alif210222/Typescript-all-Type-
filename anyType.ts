// Any type in typescript 

type userInformation  = {
     userName : string ;
     id : number;

}

const userData : userInformation  = {
    userName : "Alif Sarker",
    id : 1423 , 
}

console.log (userData)



// ======> Any type 

let userName : any ;

userName = "Anis";
userName = 2424;
userName = true ;
userName = [10,20];

