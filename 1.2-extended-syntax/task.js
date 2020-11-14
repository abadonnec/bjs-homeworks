"use strict";
function getResult(a, b, c) {
    let d;
    let result = [];
    d = b ** 2 - 4 * a * c
    if (d < 0) {
        result = [];
    }
    else if (d === 0) {
        result[0] = (-b + Math.sqrt(d)) / (2 * a)
    }
    else if (d > 0) {
        result[0] = (-b + Math.sqrt(d)) / (2 * a)
        result[1] = (-b - Math.sqrt(d)) / (2 * a)
    }
    return result;
}


function getAverageMark(marks) {
    let allMarks = marks;
    let cutMarks;
    let amountMarks = 0;
    let averageMark;
    if (allMarks.length === 0) {
        return 0
    }
    else {
        cutMarks = allMarks.slice(0, 5)
    }
    for (let i = 0; i < cutMarks.length; i++) {
        amountMarks = amountMarks + cutMarks[i];
    }
    averageMark = amountMarks / cutMarks.length;

    if (cutMarks.length <= 5) {
        return averageMark
    } else {
        `${averageMark}, оценок больше 5`
    }
}


function askDrink(name, dateOfBirthday) {
    let userName = name;
    let userYear = dateOfBirthday.getFullYear();
    let currentDate = new Date().getFullYear();
    let userAge = currentDate - userYear;
    if (userAge > 18) {
        return `Не желаете ли олд-фэшн, ${userName}?`
    }
    else {
        return `Сожалею, ${userName}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }

}