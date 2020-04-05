"use strict";
let money = +prompt( "Ваш бюджет на месяц?" );
let time = prompt( "Введите дату в формате YYYY-MM-DD" ); 
let appData = {
    budgetData : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false,
};
let question = prompt("Введите обязательную статью расходов в этом месяце");
let moneyQuestion = +prompt("Во сколько обойдется?");
expenses :{
    question : moneyQuestion
}
alert ("Бюджет на 1 день"+appData.budgetData/30);