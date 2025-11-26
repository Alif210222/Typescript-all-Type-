// mapped type 

const arrayOfNum : number[] = [1,2,3,4]
const arrayOfString : string[] = ["1","3","6"]

const arrayOfStringWithMap : string[] = arrayOfNum.map((num) => num.toString())
// console.log(arrayOfStringWithMap);



//* Example of mapped type 

type AreaOfNum = {
    height: number;
    width: number;
}

// type AreaOfString ={
//     [key in keyof AreaOfNum] : string
// }

type Area<T> ={
    [key in keyof T] : T[key]
}
const area1 : Area<{height:string ; width:boolean}> = {
    height:"50",
    width: false
}

console.log(area1);
