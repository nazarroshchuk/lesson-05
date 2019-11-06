// ключові слова для змінних
// var let const
//let message='Hello!';
//alert(message);
//message='Word';
//alert(message);

//const year=2019;
//alert(year);

//const nextYear=year+1;
//message='Next year will be:'+nextYear;
//alert(message);

//const userName=prompt('Enter you name');
//alert('Helo'+userName);

//запитайте у користувача вік
//скільки йому буде через рік
//виведіть на екран

const userName=prompt('Your name?');
const userAge = parseFloat(prompt('Your age?'));
const nextAge = addOne(userAge);
alert(nextAge);

if (userAge < 18) { // < > <= === !== || &&
    alert('You not adult!');
} else {
    alert('You are adult!');
}

function addOne(num){
    const result=num+1;
    return result;
}

// All scalar data type in JS
// String
// Numder
// Boolean
// undefined
// null
// Object
// Symbol

