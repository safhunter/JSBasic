// Task 1

//пример 1 
let a = 1, b = 1, c, d; 
/*
   ++a вернет а после инкреметна, т.е. с = 2, а = 2
*/
c = ++a; 
alert(c); // ответ: 2 

//пример 2
/*
   b++ вернет b до инкреметна, т.е. d = 1, b = 2
*/ 
d = b++; alert(d); //ответ: 1 

//пример 3 
/*
   ++a вернет а после инкреметна, т.е. с = 2 + 3 = 5, а = 3
*/
c = 2 + ++a; 
alert(c); //ответ: 5 

//пример 4 
/*
   b++ вернет b до инкреметна, т.е. d = 2 + 2 = 4, b = 3
*/ 
d = 2 + b++; 
alert(d); //ответ: 4 
alert(a);

// Task 2
/*
    a *= 2 => a = a * 2 = 2 * 2 = 4
    x = 1 + 4 = 5
*/

a = 2;
let x = 1 + (a *= 2);
alert(x);

// Task 3

a = 0;
b = 2;

if((a >= 0) && (b >= 0 )) {
    alert(a - b);
} else if((a < 0) && (b < 0 )) {
    alert(a * b)
} else {
    alert(a + b);
}

// Task 4

a = 0;
b = 2;

function sum(param1, param2) {
    return param1 + param2;
}

function sub(param1, param2) {
    return param1 - param2;
}

function mul(param1, param2) {
    return param1 * param2;
}

function div(param1, param2) {
    return param1 / param2;
}

alert(sum(a, b));
alert(sub(a, b));
alert(mul(a, b));
alert(div(a, b));

// Task 5

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return sub(arg1, arg2);
        case '*':
            return mul(arg1, arg2);
        case '/':
            return div(arg1, arg2);
        default:
            return undefined;
    }
}

alert(mathOperation(a, b, "+"));
alert(mathOperation(a, b, "-"));
alert(mathOperation(a, b, "*"));
alert(mathOperation(a, b, "/"));

// Task 6

function getRubs(total) {
    lastDigit = total % 10;
    switch(lastDigit) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return total + " рублей";
        case 1:
            return total + " рубль";
        case 2:
        case 3:
        case 4:
            return total + " рубля";
    }
}

let number = +prompt("Введите сумму зачисления");
alert(`Ваша сумма в ${getRubs(number)} успешно зачислена.`)
