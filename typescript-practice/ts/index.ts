// Timer function with explicit return type

// console.log('Hello, TypeScript!');
// let a = 10;
// a = 20;
// console.log(a);
// // a = 'Hello'; // This will cause a type error because 'a' is inferred as a numberS
// let b: string = 'Hello, TypeScript!';
// console.log(b);
// // b = 123; // This will cause a type error because 'b' is explicitly typed as a string
// let c: boolean = true;
// console.log(c);
// // c = 'false'; // This will cause a type error because 'c' is explicitly typed as a boolean
// let d;
// console.log(d); // 'd' is of type 'any' because it is not initialized
// let e:null = null;
// console.log(e);
// let f: undefined = undefined;
// console.log(f);
// // f = false

// let g;
// console.log(g); // 'g' is of type 'any' because it is not initialized
// g = 42;
// console.log(g);
// g = 'Now I am a string';
// console.log(g);

// let h:any = 100;
// console.log(h);
// h = 'Now I am a string';
// h = true;
// console.log(h); 
// h = undefined;
// console.log(h);

// let arr1 = [10,30,4,24,54];
// console.log(arr1);
// arr1.push(100);
// let arr2 = ["fsfjapf", 234, true, null];
// console.log(arr2);

// arr2.push("New Element");
// console.log(arr1);
// console.log(arr2);

// let arr3: number[] = [1, 2, 3, 4, 5];
// console.log(arr3);
// // arr3.push("Hello"); // This will cause a type error because 'arr3' is explicitly typed as an array of numbers    
// let arr4:[string, number] = ["Hello", 42];
// console.log(arr4);
// arr4.push(48);
// console.log(arr4);

// let student: {name: string, age: number, isEnrolled: boolean} = {
//     name: "John Doe",
//     age: 20,
//     isEnrolled: true
// }
// console.log(student);
// let s1 = {
//     name: "Alice",
//     age: 22,
//     isEnrolled: false
// }
// console.log(s1);

// function greet(name?: string, age: number = 30){
//     console.log(`${name} and ${age}`);
    
// }
// greet("Alice", 25);
// greet();

// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(5.01, 10));
// // Arrow function for sum
// type Sum = (a: number, b: number) => number;
// const sum: Sum = (a, b) => a + b;

// let adds = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(adds(50, 10));

// // let sum = function(a:number, b:number): number{
// //     return a + b;
// // }
// console.log(sum(5, 10));    
// let arr5:(number|string)[] = [1, 2, 3, 4, 5,"fsdf","fsfjapf"];
// console.log(arr5);

// console.log(typeof arr5);
// console.log(typeof adds);


// //? Interface
// interface Person{
//     readonly id: number;
//     name: string;
//     age: number;
//     gender: string;
// }

// let obj:Person ={
//     id: 1,
//     name: "Ajay Hooda",
//     age: 25,
//     gender: "Male"
// }
// obj.name = "Ajay Hooda Updated";
// // obj.id = 2; // This will cause a type error because 'id' is marked as readonly
// console.log(obj);

// // interface Animal{
// //     name : string;
// //     age : number;
// // }
// // interface Dog extends Animal{
// //     breed: string;
// // }

// // let dog : Dog = {
// //     name: 'Tommy',
// //     age: 3,
// //     breed: 'Labrador'
// // }
// // console.log(dog);

// // interface Car{
// //     brand: string;
// //     color: string;
// //     sunroof(): string;
// // }
// // let myCar: Car = {
// //     brand: 'Toyota',
// //     color: 'Red',
// //     sunroof() {
// //         return "This car has a sunroof";
// //     }
// // }


// class Car{
//     brand: string ;
//     color : string;
//     displayInfo():  void{
//         console.log("This is a method to display car information");
//     };
//     constructor(brand: string, color: string){
//         this.brand = brand;
//         this.color = color;
//         this.displayInfo = function(){
//             console.log(`Brand: ${this.brand}, Color: ${this.color}`);
//         }
//         this.displayInfo();
//     }
    
//     start(): void{
//         console.log(`${this.brand} is starting...`);
//     }
// }
// let car =new Car("Honda", "Maroon")
// console.log(car);
// car.brand = "Toyota";
// console.log(car.brand);
// car.start();
// car.displayInfo();

// class Animal{
//     // public breed: string;
//     // private age: number = 424;
//     // protected name: string

//     eat(){
//         console.log("Animal is eating...");
//     }
// }

// class Cat extends Animal{
//     sound(){
//         console.log("Meow");
//     }
// }
// // let an = new Animal();
// // an.age = 5; // This will cause a type error because 'age' is private and cannot be accessed outside the class
// // an.name = "Buddy"; // This will cause a type error because 'name' is protected and cannot be accessed outside the class or its subclasses
// // an.breed = "Labrador";
// // console.log(an.breed);
// // console.log(an);
// // console.log(an.age); // This will cause a type error because 'age' is private and cannot be accessed outside the class
// let cat  = new Cat();
// cat.eat();
// cat.sound();

// class Person1{
//     name: string= "Ajay"  ;
//     constructor(name: string){
//         // this.name = name;
//     }
// }
// export class Employee extends Person1{
//     compamy: string;
//     constructor(name: string, company: string){
//         super(name);
//         this.name = name;
//         this.compamy = company;
//     }
//     displayInfo(): void{
//         console.log(`Employee works at ${this.name} and company is ${this.compamy}`);
//     }
// }
// let emp = new Employee("Alice", "Tech Company");
// emp.displayInfo();


// export function greet(name: string): string {
//     return `Hello, ${name}! Welcome to TypeScript.`;
// }
// console.log(greet("Aryan Upadhyay"));

console.log("start");
let s:number
s=setTimeout( () =>{
    console.log("This is a delayed message");
},5000);

console.log(s);
// console.log("end");

// console.log("start");
// setInterval( () =>{
//     console.log("This message will be logged every 3 seconds");
// },3000);
// console.log("end");


// console.log("start");
// const startTimer = function (): number {
//     const timerId = setInterval(function () {
//         console.log("Running...");
//     }, 1000);
//     return timerId;
// };
// const timerId = startTimer();




// let p1 = new Promise<string>((resolve, reject) =>{
//     let success = true; 
//     if(success!=true){
//         resolve("login successful")
//     }
//     else{
//         reject("login failed")
//     }
// })

// p1.then((ele) => {
//     console.log("Resolved value:", ele);
// }).catch((error) => {
//     console.log("Rejected error:", error);
// }).finally(() => {
//     console.log("Promise execution completed.");
// });
// let p1 = new Promise<string>((a, b) =>{
//     let success = true; 
//     if(success!=true){
//         a("login successful")
//     }
//     else{
//         b("login failed")
//     }
// })

// p1.then((ele) => {
//     console.log("Resolved value:", ele);
// }).catch((error) => {
//     console.log("Rejected error:", error);
// }).finally(() => {
//     console.log("Promise execution completed.");
// });

// function getUSer(): Promise<string>{
//     return new Promise((resolve, reject) =>{
//         resolve("User is there.....")
//         reject("User is not there.....")
//     })
// }
// getUSer().catch((res) =>{
//     console.log(res);
// }).then((err) =>{
//     console.log(err);
// }).finally(() =>{
//     console.log("Promise execution completed.");
// })

// console.log("--- Promise chain start ---");
// let p2 = new Promise<number>((resolve) => {
//     resolve(42);
// });
// p2.then((value: number) => {
//     console.log("Resolved value with operations:", value * 4);
// });
// p2.then((value) => {
//     console.log("Resolved value with operations:", value ** 4);
// });
// p2.then((value) => {
//     console.log("Resolved value with operations:", value / 4);
//     return value / 4;
// }).then((value) => {
//     console.log("Resolved value with operations:", value - 5);
//     console.log("--- Promise chain end ---");
// });

// p2.then((value) => value * 4)
// .then((value) => value ** 4)
// .then((value) => value / 4)
// .then((value) => {
//     console.log("Resolved value with operations:", value - 5);
//     console.log("--- Promise chain end ---");
// });