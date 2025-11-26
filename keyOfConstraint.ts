type RichPeopleVehicle = {
    car: string ;
    bike :string ;
    cng : string ;
}

type MyVehicle1 = "car"|"bike"|"cng";
type MyVehicle2 = keyof RichPeopleVehicle;


const MyVehicle : MyVehicle2 = "cng"



//* Example
type User = {
    id: number ;
    name:string;
    address:{
        city:string
    }

}

const user : User = {
    id : 235,
    name:"alif",
    address:{
        city:"ctg",
    }
}
const getPropertyFromObj1 = (obj : User , key : keyof User) =>{
         return obj[key]
}
const newArray1 = getPropertyFromObj1(user,  "name")


//* create generic type => jekno object type er jonno ai function ta use kora jabe  
const getPropertyFromObj2 = <X>(obj : X , key : keyof X) =>{
         return obj[key]
}


const student = {
     id:123,
     class:"four"
}

const newArray2 = getPropertyFromObj2(student,"class")

 