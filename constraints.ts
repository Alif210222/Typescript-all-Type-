
type Student = {id:number;
                name:string;
                newArray:string;
}

const addStudentToCourse = <T extends Student  >(studentInfo:T) =>{      //* Constrait kore bole diam je sob proparty r modde atlist id,name,list thaktei hobe 
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
const student3 = {
    id:123,
    name:"alif",
    newArray:"A+",
    hasPen:true,
    hasLaptop:true,
}

const newArray =  addStudentToCourse (student3)