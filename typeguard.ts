
 type Alphanumeric = number | string

const add = (num1: Alphanumeric , num2: Alphanumeric)=>{
       
    if(typeof num1 === "number" && typeof num2 === "number") {     //* we can use guard by   ==>> ( in )
         return num1 + num2;
    }
    else {
       return num1.toString() + num2.toString()
    }

}

const newArray = add(2,3)
console.log(newArray);

// add(2,"3")
// add("2",3)



// In guard ==> 



