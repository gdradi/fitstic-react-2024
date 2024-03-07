
export default {}

console.log("hello!");

// Tipi primitivi
const i: number = 0;
let str: string = "hello!";
let bool: boolean = true;
str = "world!";
//let array: number[] = [1,2,"ciao", true];
let array: number[] = [1, 2, 3, 4];

// Enum
enum WeekDays {
    MONDAY,
    TUESDAY,
    WEDNESDAY
}
let myDay: WeekDays = WeekDays.MONDAY;
let dayArray: WeekDays[] = [
    WeekDays.MONDAY,
    WeekDays.WEDNESDAY
]

// Operazioni con gli array
console.log(array);
array.push(5);
console.log(array);

let nuovoArray = array.concat(6);
console.log("array", array);
console.log("nuovoArray", nuovoArray);

const arrayImmutabile = [1, 2, 3];
arrayImmutabile.push(4);

// Oggetti e strutture dati
let punto = {
    x: 3, y: 7
};


export interface Point {
    readonly x: number;
    readonly y: number;
    readonly z?: number;
}

const mioPunto: Point = {
    x: 5,
    y: 6
};
//mioPunto.x = 10;
interface Point3d extends Point {
    z: number;
}
const punto3d: Point3d = {
    x: 1,
    y: 1,
    z: 1
};
console.log(punto3d);

const { z, y, x } = punto3d;
console.log("x: ", x);

const punto3d2: Point3d = { ...punto3d };

console.log("punti iniziali");
console.log("punto3d", punto3d);
console.log("punto3d2", punto3d2);
punto3d2.z = 2;
console.log("punto3d", punto3d);
console.log("punto3d2", punto3d2);



// Funzioni

console.log(sum(2, 3));
function sum(n1: number, n2: number): number {
    return n1 + n2;
}

interface Sum {
    (n1: number, n2: number): number;
}

const sum2: Sum = (n1, n2) => n1 + n2;
console.log(sum2(2, 3));

interface PuntoConFunzione {
    readonly x: number;
    readonly y: number;
    readonly z?: number;
    readonly somma: Sum;
}

const mioPuntoConFunzione: PuntoConFunzione = {
    x: 2,
    y: 4,
    somma: (n1: number, n2: number) => {
        return n1 + n2
    }
}

mioPuntoConFunzione.somma(2, 3);



// Funzioni classiche della programmazione funzionale

const arr1: number[] = null as any;

const risultato = arr1?.map(item => (item % 2) === 0) ?? [];


console.log("arr1", arr1);
console.log("risultato", risultato);



const arr2 = [1, 2, 3];
const risultato2 = arr2.filter(item => (item % 2) === 0);
console.log("arr2", arr2);
console.log("risultato2", risultato2);