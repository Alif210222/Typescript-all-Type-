// type alies 
type User = {
    name : string;
    age : number;
}


//* interface => only works with on object type : array, object, function  
interface IUser {
    name: string;
    age : number;
}

type Role = {
    role : "admin" | "user";

}

type UserWithRole = User & Role     //? type intersection   

interface IUserWithRole extends IUser {  //? IUser EXTEND by interface      
    role: "admin" | "user";
}


 const user1 : UserWithRole ={
    name:"Alif",
    age : 43,
    role : "user",
 }

 const user2 : IUser ={
    name:"Alif",
    age : 43,
    
 }

 const user3 : IUserWithRole ={         //? interface extend with role 
    name:"Alif",
    age : 43,
    role:"admin",
    
 }