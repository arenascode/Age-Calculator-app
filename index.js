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

// for apply Error styles if some input is empty
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

if (form instanceof HTMLFormElement) {
  function calculateResult(e) {
    e.preventDefault()

    const dataForm = new FormData(form)
    const dayInput = dataForm.get('day')
    const monthInput = dataForm.get('month')
    const yearInput = dataForm.get('year')
    console.log(dayInput);

    console.log(isNaN(parseInt(dayInput)));

    isNaN(parseInt(dayInput)) ? mustBeValidDay() : console.log(`the date is correct`);
    
    dayInput == "" ? requiredDay() : console.log(`there is data`)

    isNaN(parseInt(monthInput))
      ? mustBeValidMonth()
      : console.log(`the date is correct`);

    monthInput == ""
      ? requiredMonth()
      : console.log(`there is data`);
    
    isNaN(parseInt(yearInput))
      ? mustBeValidYear()
      : console.log(`the date is correct`);
    
    yearInput == ""
      ? requiredYear()
      : console.log(`there is data`);

  console.log(`enviado`);

  const date = new Date()
  console.log(date);
  
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