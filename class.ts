// OOP =>>> class  >> object

// class Animal {                       //? This the blueprint of Animal object => now we can use it for any kind of object by using this blueprint 
//     name:string;
//     species : string;
//     sound: string;

//     constructor (
//         name:string,
//         species : string,
//         sound: string,
//     ){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
// }

class Animal {                       //? This the blueprint of Animal object => now we can use it for any kind of object by using this blueprint 
    // name:string;
    // species : string;
    // sound: string;

    constructor(
      public  name: string,
      public  species : string,
      public  sound: string,
    ){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound(){
        console.log(`${this.name} is making sound : ${this.sound}`);
    }
 
}

const dog = new Animal("Dogesh vai","dog","ghew ghew")
const cat = new Animal("cat vai","cat","meaw meaw")
// console.log(dog.sound)
console.log(cat.makeSound);

