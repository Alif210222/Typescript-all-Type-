// Create Inheritence 
class Parent {
    name : string;
    age : number;
    address : string;

    constructor(  name : string,
    age : number,
    address : string,){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep (numOfHours : number){
        console.log(`${this.name} dine ${numOfHours} hours ghumay .`);
    }

} 




class Student extends Parent {   //* using inheritence 
   
} 

const student1 = new Student("Alif Sarker",18,"Bangladesh")

   student1.getSleep(13);



//* Example 2
class Teacher extends Parent{
    
    designation:string;

    constructor(name:string,age:number,address:string, designation:string){

        super(name,age,address)        //* Super call  
       
        this.designation = designation;
        
    }
    //* Own Property
    takeClass (numOfHours : number ){
          console.log(`${this.name} dine ${numOfHours} hours class ney .`);
    } 

} 

const Teacher1 = new Teacher("Babu sir",18,"Bangladesh","Teacher")

   Teacher1.takeClass(34)