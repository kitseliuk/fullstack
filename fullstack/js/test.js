// // const addNumber = (number) => {
// //     let sum = Number(number) + 10;
// //     return console.log(sum);
// // };

// // const getInput = document.querySelector('input[name="number"]');
// // const butRef = document.querySelector("button");

// // const cart = {
// //     showItems() {
// //         console.log("В корзині: ", this.items);
// //     },
// // };

// // const dress = {
// //     items: ["Штани, сукня"],
// // };

// // const shoes = {
// //     items: ["Туфлі, кроси"],
// // };

// // const glass = {
// //     items: ["Сонцезахисні, водійські"],
// // };

// // cart.showItems.bind(dress)();

// // document.querySelector('.dress').addEventListener('click', cart.showItems.bind(dress));
// // document.querySelector('.shoes').addEventListener('click', cart.showItems.bind(shoes));
// // document.querySelector('.glass').addEventListener('click', cart.showItems.bind(glass));

// // const infoCar = {
// //     name: "Skoda",
// //     model: "Fabia",
// //     year: 2008,
// //     showInfo: function () {
// //         console.log("Car: " + this.name + " model: " + this.model + " year: " + this.year);
// //     },
// // };

// // const infoCar2 = {
// //     name: "VW",
// //     model: "Polo",
// //     year: 2008,
// // };

// // infoCar.showInfo.bind(infoCar2)();
// // infoCar.showInfo.call(infoCar2);
// // infoCar.showInfo.apply(infoCar2);

// // class Bank {
// //     static type = "Otp";

// //     constructor(options) {
// //         this.summ = options.summ;
// //         this.month = options.month;
// //         this.p = options.p;
// //     }

// //     credit() {
// //         return "I`m Otp";
// //     }
// // }

// // const userBank = new Bank({
// //     summ: 30000,
// //     month: 5,
// //     p: 500,
// // });

// // console.log(userBank.credit());

// // class NewBank extends Bank {
// //     constructor(options) {
// //         super(options);
// //         this.card = options.card;
// //     }

// //     credit() {
// //         super.credit();
// //         return "I`m Privat";
// //     }
// // }

// // const privat = new NewBank({
// //     summ: 30000,
// //     month: 5,
// //     p: 500,
// //     card:true,
// // })

// // console.log(privat.credit());

// // const a = [1, 2, 3];

// // console.log(a);

// // const ad = {
// //     x: 1,
// //     y:2,
// // }

// // const bd = Object.create(ad);

// // console.log(bd.hasOwnProperty("x"));

// // const Manager = function (name, discont) {
// //     this.name = name;
// //     this.discont = discont;

// //     this.disc = function () {
// //         this.discont += 1;
// //     }
// // }

// // const ann = new Manager("Ann", 5);
// // const pedro = new Manager("Pedro", 6);

// // console.log(ann);
// // console.log(pedro.discont);
// // pedro.disc();
// // console.log(pedro.discont);

// // Manager.prototype.disc = function () {
// //     this.discont += 1;
// // }

// // console.log(pedro.discont);
// // pedro.disc();
// // console.log(pedro.discont);

// // console.dir(Manager);

// class CoffeeMachine {
//     _water = 0;
//     #waterLimit = 500;

//     constructor(power) {
//         this.power = power;
//     }

//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }
//         this._water = value;
//     }
// }

// let cofMan = new CoffeeMachine(555);
// cofMan.waterAmount = 20;
// console.log(cofMan._water);
// cofMan.waterAmount = -20;
// console.log(cofMan._water);