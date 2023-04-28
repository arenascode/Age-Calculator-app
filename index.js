const yearResult = document.getElementById('showYear')
const monthResult = document.getElementById('showMonth')
const dayResult = document.getElementById('showDay')
const submitButton = document.getElementById('circleButton')
const form = document.getElementById('inputsDate')
const spans = document.querySelectorAll('span')

// for apply Error styles if some input is empty
function requiredDay() {
  document.querySelector('label[for="day"]').style.color = "var(--color-light-red)";
  document.querySelector('input[name="day"]').style.borderColor =
    "var(--color-light-red)";
  spans[0].style.display = 'block'
}
function requiredMonth() {
  document.querySelector('label[for="month"]').style.color =
    "var(--color-light-red)";
  document.querySelector('input[name="month"]').style.borderColor =
    "var(--color-light-red)";
  spans[1].style.display = "block";
}
function requiredYear() {
  document.querySelector('label[for="year"]').style.color =
    "var(--color-light-red)";
  document.querySelector('input[name="year"]').style.borderColor =
    "var(--color-light-red)";
  spans[2].style.display = "block";
}

if (form instanceof HTMLFormElement) {
  function calculateResult(e) {
    e.preventDefault()
  const dataForm = new FormData(form)
    const dayInput = dataForm.get('day')
    const monthInput = dataForm.get('month')
    const yearInput = dataForm.get('year')
    
    dayInput === "" ? requiredDay(): console.log(`there is data`)
    
    monthInput === ""
      ? requiredMonth()
      : console.log(`there is data`);
    
    yearInput === ""
      ? requiredYear()
      : console.log(`there is data`);

  console.log(`enviado`);

//   yearResult.innerText = '2020'
//   monthResult.innerText = '04'
//   dayResult.innerText = '30'
}
} else {
  console.log(`isn't a form`);
}

// For remove Error Styles if some imput has a value

