//* problem 1 

// function formatValue (value : string | number| boolean) : string | number | boolean {

//     if(typeof value === "string"){
//         return  value.toUpperCase();
//     }
//     else if(typeof value === "number"){
//         return  value*10;
//     }
//     else if(typeof value === "boolean"){
//         return !value;
//     }

//     return  value;
// }

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));



//* Problem - 2 


// function getLength (value : string | any[] ) : number {

//     if(typeof value === "string"){
//            return value.length;
//     }
//     else if (Array.isArray(value)){
//         return value.length;
//     }

//     return value ;
  
// }

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));




//* problem - 3

// class Person {
//     name: string ;
//     age : number ;

//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }

//     getDetails() : string{
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());



//* problem-4

// type Book = {
//     title : string;
//     rating : number;
// }

// function filterByRating(items : Book[]):Book[] {

//     return (items.filter( item => item.rating >= 4 ));
// }


// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));



//* problem - 5 

// type User = {
//     id: number;
//     name: string;
//     email: string;
//     isActive:boolean;
// }


// function filterActiveUsers (array : User[]): User[] {
//          return array.filter(user => user.isActive === true )
// }


// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));



// interface Book {
//     title : string;
//     author : string;
//     publishedYear: number;
//     isAvailable: boolean;
// }

// function printBookDetails (book:Book){
//          const availability = book.isAvailable ? "Yes" : "No"; 


//     console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability} `);
// }

// const myBook:Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);





//* problem 7 

// function getUniqueValues<T extends string | number>(arr1: T[],arr2: T[]): T[] {
//   const newArray: T[] = [];

 //* check the value exists in newArray
//   const exists = (value: T): boolean => {
//     for (let i = 0; i < newArray.length; i++) {
//       if (newArray[i] === value) return true;
//     }
//     return false;
//   };


//   for (let i = 0; i < arr1.length; i++) {
//     if (!exists(arr1[i])) {
//       newArray[newArray.length] = arr1[i];
//     }
//   }


//   for (let i = 0; i < arr2.length; i++) {
//     if (!exists(arr2[i])) {
//       newArray[newArray.length] = arr2[i];
//     }
//   }

//   return newArray;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// console.log(getUniqueValues(array1, array2));


// problem -8 

// type Product = {
//   name: string;
//   price: number;
//   quantity: number;
//   discount?: number; 
// };

// function calculateTotalPrice(products:Product[]){

// const totalProductPrice =  products.map((product) => {

//       const productPrice = product.price * product.quantity;

//       const discountAmount =product.discount ? (productPrice * product.discount) / 100 : 0 ;

//      return productPrice - discountAmount;
//     })

//     return totalProductPrice.reduce((sum,value) => sum + value , 0);
// }



// const products = [
//   { name: 'Pen', price: 10, quantity: 2 },
//   { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//   { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products))







// ==>>> Problem test 


