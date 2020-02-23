"use strict";
// Строгий режим будет правильно работать 
// только при установке на первой строчке файла
console.log('\n index =======================\n\n');
let makeMeWork = 42;
console.log(makeMeWork);

let number = 5;
let isAdult;
let userName;
userName = window.prompt("Как вас зовут?", "Anonimous");
isAdult = window.confirm("Вам исполнилось 18?");
window.alert("Пользователя зовут " + userName + ", ему исполнилось 18: " + isAdult);