
var money = prompt("Введите ваш бюджет на месяц");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
 budget: money,
 time: time,
 expenses : {
   "firstQuestion" : "noFirstQuestion"
 },
 income : [],
 savings: "False",
 };
var firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
var noFirstQuestion = prompt("Во сколько обойдется?");
console.log(appData);
alert("Ваш бюджет на месяц"+" "+ money/30) ;