// const createArrayWithString = (value:string) =>{
//     [value];
// }
// const createArrayWithNumber = (value:number) =>{
//     [value];
// }
// const createArrayWithUserObj = (value : {id:number ; name : string}) =>{

//     return [value];
// }


//? Generic Type function create 

const CreateArrayWithGeneric = <T>(value : T) =>{
     return [value];
}

const arrString= CreateArrayWithGeneric("apple")
const arrNum = CreateArrayWithGeneric(2222)
const arrObj = CreateArrayWithGeneric({
    id:123,
    name:"next level "
})

// 
const addStudentToCourse = <T>(studentInfo:T) =>{
    return {
        course:"Next Level",
        ...studentInfo,

    };
};

const student1 = {
    id:123,
    name:"Alif",
    hasPen:true,
}
const student2 = {
    id:123,
    name:"Alif",
    hasPen:true,
    hasLaptop:true,
}

const res = addStudentToCourse(student1)
console.log(res)



//* generic with tuple 
const createArrayTupleWithGeneric = <X,Y>(param1:X,param2:Y) => [
           param1,
           param2
]

const res1 = createArrayTupleWithGeneric("Alif",false)
const res2 = createArrayTupleWithGeneric(333,"robin")