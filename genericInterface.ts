interface Developer <T,Y,X=null> {
    name:string;
    salary:number;
    device :{
        brand:string;
        model:string;
        releaseYear:number;
    }
    smartWatch: T;      
    bike?:X;
    car:Y;
}

interface BrandCaraWatch {            //? Interface 1 => extend kora hoyce.
    heartRate: string;
    stopwatch:boolean;
}

interface CarBrand {
    model:string;
    year:number;
}

const poorDeveloper : Developer<BrandCaraWatch,CarBrand> = {
    name:"Alif",
    salary:12000,
    device:{
        brand:"lenevo",
        model:"er32",
        releaseYear:2019,

    },
    smartWatch:{
        heartRate:"200",
        stopwatch:true,

    },
    bike:null,
    car:{
        model:"honda",
        year:2021,
    }
}