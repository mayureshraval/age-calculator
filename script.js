// dom element for taking input
let userInput = document.getElementById('date');

// not allowing the user to select future dates by using current date and formating it to something js understands which is the below format.
userInput.max = moment().format('YYYY-MM-DD');
// console.log(moment()._d); just printing the date in moment js

// dom element for showing output
let result = document.getElementById('result');

function calculateAge() {
    // taking birthdate from user and converting it into a moment object
    let birthDate = moment(userInput.value);
    // calculating the difference between the birthdate and today's date and converting it into a duration object.
    let ageDuration = moment.duration(moment().diff(birthDate));
    // console.log(ageDuration);
    // extracting the years, months, and days from the ageDuration object.
    let years = ageDuration.years();
    let months = ageDuration.months();
    let days = ageDuration.days();

    // displaying the calculated age
    result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
}