let count = 50;
let weightElement = document.getElementById('mass');
let heightElement = document.getElementById('ele');
let bmi, description;

document.getElementById('decrement').onclick = () => {
  count -= 1;
  weightElement.innerText = count;
};

document.getElementById('increment').onclick = () => {
  count += 1;
  weightElement.innerText = count;
};

let submitButton = document.body.querySelector('footer');
let toggle = 0;

let errorMessage = document.createElement('div');
errorMessage.style.color = 'red';
errorMessage.style.fontSize = '24px';
errorMessage.style.fontFamily = 'Montserrat';
errorMessage.style.display = 'none';

document.body.appendChild(errorMessage);

submitButton.onclick = () => {
  if (heightElement.value !== '') {
    if (!isNaN(Number(weightElement.innerText)) && !isNaN(Number(heightElement.value))) {
      if (toggle === 0) {
        submitButton.innerText = 'Re-calculate BMI';
        document.getElementById('adjuster').style.top = '0';
        calculateBmi();
        updateDetails();
        toggle = 1;
      } else {
        submitButton.innerText = 'Calculate Your BMI';
        document.getElementById('adjuster').style.top = '100%';
        toggle = 0;
      }
      
      errorMessage.style.display = 'none';
    }
  } else {
    errorMessage.innerText = 'Please enter your height!';
    errorMessage.style.display = 'block';
  }
};

function calculateBmi() {
  let userWeight = Number(weightElement.innerText);
  let userHeight = (Number(heightElement.value) / 100) ** 2;
  let status = "";

  bmi = Number((userWeight / userHeight).toFixed(1));

  if (bmi < 18.5) {
    status = 'Underweight';
    description = 'Your BMI indicates that you are underweight.';
  } else if (bmi < 25) {
    status = 'Normal Weight';
    description = 'Your BMI falls within the normal weight range.';
  } else if (bmi < 30) {
    status = 'Overweight';
    description = 'Your BMI indicates that you are overweight.';
  } else {
    status = 'Obese';
    description = 'Your BMI indicates obesity.';
  }
}

function updateDetails() {
  document.getElementById('stage').innerText = status;
  document.getElementById('range').innerText = bmi;
  document.getElementById('comment').innerText = description;
}
