
// Result of age calculate
const yearResult = document.getElementById('showYear')
const monthResult = document.getElementById('showMonth')
const dayResult = document.getElementById('showDay')

const submitButton = document.getElementById('circleButton')
const form = document.getElementById('inputsDate')

// To show errors
const spans = document.querySelectorAll('span')


//Label and input selectors for style
const dayLabel = document.querySelector('label[for="day"]');
const dayStyleInput = document.querySelector('input[name="day"]');
const monthLabel = document.querySelector('label[for="month"]')
const monthStyleInput = document.querySelector('input[name="month"]')
const yearLabel = document.querySelector('label[for="year"]')
const yearStyleInput = document.querySelector(
'input[name="year"]'
)

//Date
const date = new Date()
console.log(date);
  
// for apply Error styles if some input is empty
// Days
function requiredDay() {
  dayLabel.style.color = "var(--color-light-red)";
  dayStyleInput.style.borderColor =
  "var(--color-light-red)";
  spans[0].style.display = 'block'
  spans[0].innerText = `This field is required`;
}
function mustBeValidDay() {
  dayLabel.style.color = "var(--color-light-red)";
  dayStyleInput.style.borderColor = "var(--color-light-red)";
  spans[0].style.display = "block";
  spans[0].innerText = `Must be a valid day`
}
//Months
function requiredMonth() {
  monthLabel.style.color =
  "var(--color-light-red)";
  monthStyleInput.style.borderColor =
  "var(--color-light-red)";
  spans[1].style.display = "block";
  spans[1].innerText = `This field is required`;
}
function mustBeValidMonth() {
  monthLabel.style.color = "var(--color-light-red)";
  monthStyleInput.style.borderColor = "var(--color-light-red)";
  spans[1].style.display = "block";
  spans[1].innerText = `Must be a valid month`;
}
//Years
function requiredYear() {
  yearLabel.style.color =
  "var(--color-light-red)";
  yearStyleInput.style.borderColor =
  "var(--color-light-red)";
  spans[2].style.display = "block";
  spans[2].innerText = `This field is required`
}
function mustBeValidYear() {
  yearLabel.style.color = "var(--color-light-red)";
  yearStyleInput.style.borderColor = "var(--color-light-red)";
  spans[2].style.display = "block";
  spans[2].innerText = `Must be a valid year`;
}
function mustBeInThePast() {
  yearLabel.style.color = "var(--color-light-red)";
  yearStyleInput.style.borderColor = "var(--color-light-red)";
  spans[2].style.display = "block";
  spans[2].innerText = `Must be in the past`;
}

if (form instanceof HTMLFormElement) {
  function calculateResult(e) {
    e.preventDefault()

    const dataForm = new FormData(form)
    const dayInput = dataForm.get('day')
    const monthInput = dataForm.get('month')
    const yearInput = dataForm.get('year')
    
    // invalid day validation
    isNaN(parseInt(dayInput)) || dayInput < 1 || dayInput > 31 ? mustBeValidDay() : console.log(`the date is correct`);
    
    //empty day input validation
    dayInput == "" ? requiredDay() : console.log(`there is data`)
    
    // invalid month validation
    isNaN(parseInt(monthInput)) || monthInput < 1 || monthInput > 12 ? mustBeValidMonth()
      : console.log(`the date is correct`);
    
    //empty month input validation
    monthInput == "" ? requiredMonth() : console.log(`there is data`);
    
    // invalid year validation
    isNaN(parseInt(yearInput)) || yearInput < 1 ? mustBeValidYear()
      : console.log(`the date is correct`);
    
    // empty year input validation
    yearInput == ""
      ? requiredYear()
      : console.log(`there is data`);
    
    //year future validation
    yearInput > date.getFullYear() ? mustBeInThePast() : console.log(`año del pasado`);
    
    const monthNumber = parseInt(monthInput)
    if (parseInt(dayInput) === 31 && (monthNumber === 02 || monthNumber === 04 || monthNumber === 06 || monthNumber === 09 || monthNumber === 11)) return mustBeValidDay()

    if ((parseInt(dayInput) === 30 || parseInt(dayInput) === 31) && monthNumber === 02) return mustBeValidDay()
    
    if (
      isNaN(parseInt(dayInput)) || dayInput < 1 ||
      dayInput > 31 ||
      isNaN(parseInt(monthInput)) || monthInput < 1 || parseInt(monthInput) > 12 ||
      isNaN(parseInt(yearInput)) || yearInput <1 || yearInput > date.getFullYear()
    ) {
      console.log(`please complete all fields`);
    } else {
      let dateToString = `${yearInput}-${monthInput}-${dayInput}`;
      const dateEntered = Number(new Date(dateToString));

      const today = Number(new Date());

      const milisecondInADay = 86400000;
      const daysInAYear = 365;
      const daysInaMonth = 31;

      const resultInMiliseconds = today - dateEntered;
      const resultInDays = resultInMiliseconds / milisecondInADay;
      console.log(resultInDays);
      const resultInYears = resultInDays / daysInAYear;

      const calculatedYear = Number(resultInYears.toString().split(".")[0]);
      const decimalToString = resultInYears.toString().split(".")[1];
      const decimalValue = Number(`0.${parseInt(decimalToString)}`);

      const monthsToString = ((decimalValue * 365) / 31).toString();
      const calculatedMonth = Number(monthsToString.split(".")[0]);

      const calculateDaysByDecimal = monthsToString.split(".")[1];
      const calculatedDays = Math.floor(
        Number(`0.${parseInt(calculateDaysByDecimal)}`) * 31
      );

      yearResult.innerText = calculatedYear;
      monthResult.innerText = calculatedMonth;
      dayResult.innerText = calculatedDays;
    }
  }
} else {
  console.log(`isn't a form`);
}

// To remove Error Styles if some imput has a value. Continue here

dayStyleInput.addEventListener('input', () => {
  dayLabel.style.color = "";
  dayStyleInput.style.borderColor = "";
  spans[0].style.display = "none";
})
monthStyleInput.addEventListener('input', () => {
  monthLabel.style.color = "";
  monthStyleInput.style.borderColor = "";
  spans[1].style.display = "none";
})
yearStyleInput.addEventListener('input', () => {
  yearLabel.style.color = "";
  yearStyleInput.style.borderColor = "";
  spans[2].style.display = "none";
})