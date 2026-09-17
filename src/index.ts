let name:string = "asd"; //Bocsi ts ben igy van kisokos
name =  "kolompar"

let age:number = 10
age = 20

let price:number = 19.67

let active:boolean = true

let bigNumber:bigint = 676767676767676767676767676767676767677676767676767676767676767676767676n

let id:symbol = Symbol("id")

let obj = {
    [id]: 1,
    name: "Alice",
    age: 25,
    active: false
}

console.log(obj)
console.log(obj[id]) //1 lesz

let fuggv: symbol = Symbol("fuggv")

class Osztaly{
    [fuggv](){
        return "Osztály függvény"
    }
}

let osztaly:any = new Osztaly()

let osztalynev = osztaly[fuggv]()

console.log(osztalynev)



let nev2:unknown

nev2 = 42
nev2 = true

console.log(nev2)
console.log(typeof(nev2))

if(typeof(name) === "string"){
    console.log("ez string genyo")
}


const numbers: number[] = [1,2,3,4]
const names: string [] = ["Alice", "Bob", "asd", "asdsada"]

for(const name of names){
    console.log(name)
}

numbers.forEach(element => {
    console.log(element)
});

const user1: [number,string,boolean] = [1, "Alice", true]

enum Role{
    Admin,
    User,
    Guest
}

const userRole: Role = Role.User

console.log(userRole)

interface IUser{
    id: number,
    name: string,
    email: string
    
}

//Tipust hozhatunk letre

type User ={
    id: number;
    name: string;
    email: string;
}

const user : User = {
    id:1,
    name:"Maci",
    email: "macimail@gmail.com"
}

console.log(user)