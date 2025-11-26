// enum type =  we can set the constant value in a variable by Enum . nO DUPLICATE VALUE IS ALLOWED IN ENUM .
// ENUM Type : numeric , string , heterogenous; 
// Example : Numeric number
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
    RequestType[RequestType["saveData"] = 4] = "saveData";
})(RequestType || (RequestType = {}));
//  console.log(RequestType)
// Example : String Type 
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read Data";
    RequestType2["deleteData"] = "Delete data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.deleteData);
