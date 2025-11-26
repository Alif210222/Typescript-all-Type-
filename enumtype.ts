// enum type =  we can set the constant value in a variable by Enum . nO DUPLICATE VALUE IS ALLOWED IN ENUM .

// ENUM Type : numeric , string , heterogenous; 

// Example : Numeric number
 enum RequestType {
    readData = 1,
    deleteData = 3,
    saveData ,

 }
//  console.log(RequestType)

 // Example : String Type 

 enum RequestType2{
    readData = "Read Data",
    deleteData = "Delete data",
 }

 console.log(RequestType2.deleteData)