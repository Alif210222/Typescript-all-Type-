
type GenericArray<value> = Array<value>;

// const friends: Array<string> = ["alif","sakib","raju","milon"]
const friends1:GenericArray<string> = ["alif","sakib","raju","milon"]


//const rollNumber:number[] = [2,3,45,67,8]
const rollNumber:GenericArray<number> = [2,3,45,67,8]



//* Another example
 
type Coordinates<x,y> = [x,y]

const coordinates1: Coordinates<number,number> = [4,5]
const coordinates2: Coordinates<string,string> = ["one", "two"]



//* Another Example for object 
type GenericObject<value> = Array<value>


type User={
    name:string;
    age:number
}
const userList : GenericObject<User> =[
    {
        name:"alif",
        age: 45,
    },
    {
         name:"shopon",
         age: 67
    }
]


