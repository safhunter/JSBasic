"use strict";

//task 1
let Tc = +prompt("Введите температуру в °С");
alert((9 / 5) * Tc + 32);

// task 2
let admin = null;
let name = "Василий";
admin = name;
console.log(admin);

//task 3
/*
    1. 10 + 10 = 20
    2. 20 + "10" = "2010" неявное преобразование числа 20 в строку "20"
*/
console.log(10 + 10 + "10");
/*
    1. 10 + "10" = "1010" неявное преобразование числа 10 в строку "10"
    2. "1010" + 10 = "101010" неявное преобразование числа 10 в строку "10"
*/
console.log(10 + "10" + 10);
/*
    1. +"10" = 10 унарный + преобразует строку "10" в число 10
    2. 10 + 10 = 20
    3. 20 + 10 = 30
*/
console.log(10 + 10 + +"10");
/*
    1. -"" = -0 унарный - преобразует пустую строку в -0
    2. 10 / -0 = -Infinity
*/
console.log(10 / -"");
/*
    1. +"2,5" = NaN унарный + преобразует строку в число NaN(т.к. в строке не число)
    2. 10 / NaN = NaN
*/
console.log(10 / +"2,5");
